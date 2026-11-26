#!/usr/bin/env node
/**
 * set-publication-time.mjs
 * 从 publication-times.json 批量写入论文/项目/专利/奖励条目的月份。
 *
 * 用法：node scripts/set-publication-time.mjs [json路径]
 *   默认读取 scripts/data/publication-times.json
 *
 * 数据文件格式（后台管理网站可输出）：
 *   { "条目id": "MM", ... }   MM = 01~12，_ 开头的键被忽略
 *
 * 行为：仅修改 achievements.js 中已有条目的 month，不动其他内容。
 *   - publicationRows 数组行：在行末逗号前追加 ", \"MM\""（仅当该行尚无第 7 列）
 *   - concat 块对象：在 id/type 之后插入 "month: \"MM\","（仅当尚无 month）
 *   - 未列出的条目保留原值（空 → 页面显示「—」）
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, "..");
const dataFile = path.join(root, process.argv[2] || "scripts/data/publication-times.json");
const target = path.join(root, "assets/js/data/achievements.js");

// 1. 读 + 校验数据
let times;
try {
  times = JSON.parse(fs.readFileSync(dataFile, "utf8"));
} catch (e) {
  console.error("无法读取 " + dataFile + "：" + e.message);
  process.exit(1);
}
if (typeof times !== "object" || Array.isArray(times)) {
  console.error("publication-times.json 顶层必须是对象 {id: \"MM\"}");
  process.exit(1);
}
const entries = {};
for (const [k, v] of Object.entries(times)) {
  if (k.startsWith("_")) continue;
  const s = String(v);
  if (s !== "" && (!/^\d{2}$/.test(s) || +s < 1 || +s > 12)) {
    console.error("无效月份：" + k + " = " + s + "（需 01~12 或空字符串）");
    process.exit(1);
  }
  entries[k] = s;
}

// 2. 读目标
let src = fs.readFileSync(target, "utf8");
const lines = src.split("\n");
let changed = 0;

// 3a. publicationRows 行：形如
//   ["id", "YYYY", "title", "authors", "venue", "doi"],
// 若该行尚无第 7 列且 entries 提供月份，则追加 ", "MM"" 到行尾（逗号前）
for (let i = 0; i < lines.length; i++) {
  const m = lines[i].match(/^\s*\[\s*"([^"]+)"\s*,/);
  if (!m) continue; // 非数组行
  const id = m[1];
  if (!(id in entries)) continue;
  if (entries[id] === "") continue; // 空 → 不动
  // 判断是否已有 7 列：数一下双引号成对
  const cols = lines[i].split('"').length - 1; // 引号总数；偶数成对
  if (cols / 2 >= 7) continue; // 已有第 7 列
  // 行末形如 `...],` → 在 `]` 前插入 `, "MM"`，保留 `]`
  const closeBr = lines[i].lastIndexOf("]");
  if (closeBr === -1) continue;
  const before = lines[i].slice(0, closeBr); // 含末尾逗号
  const after = lines[i].slice(closeBr); // "]," 或 "]"
  lines[i] = before + ', "' + entries[id] + '"' + after;
  changed++;
}

// 3b. concat 块对象：id: "xxx", 行之后若无 month 行则插入
for (const [id, mo] of Object.entries(entries)) {
  if (mo === "") continue;
  const idLineIdx = lines.findIndex((l) => l.trim() === 'id: "' + id + '",');
  if (idLineIdx === -1) continue; // 该 id 是 publicationRows 行，3a 已处理
  // 看接下来 5 行内是否已有 month
  const block = lines.slice(idLineIdx, idLineIdx + 5).join("\n");
  if (/month:\s*"/.test(block)) continue;
  lines.splice(idLineIdx + 1, 0, '      month: "' + mo + '",');
  changed++;
}

// 4. 写回
if (changed === 0) {
  console.log("无变化：所有条目已有 month 或未提供。");
} else {
  fs.writeFileSync(target, lines.join("\n"), "utf8");
  console.log("已写入 " + target + "（修改 " + changed + " 条 month）。");
}
const total = Object.values(entries).filter(Boolean).length;
console.log("数据源共 " + total + " 条有值；未设 month 的条目页面显示「—」。");
