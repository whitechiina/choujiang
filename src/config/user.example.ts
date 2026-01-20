/*
 * @LastEditors: whitechiina 1293616053@qq.com
 * @LastEditTime: 2026-01-20 18:47:34
 */
/**
 * 用户数据示例文件
 * 
 * 这是一个示例文件，展示了用户数据的格式。
 * 实际使用时，请复制此文件为 user.ts 并替换为真实数据。
 * 
 * 数据结构说明：
 * - key: 用户唯一标识（数字）
 * - name: 用户姓名（字符串）
 */

export interface UserItem {
  key: number;
  name: string;
}

/**
 * 用户列表示例数据
 * 包含假数据用于演示和测试
 */

export const user: UserItem[] = Array.from({ length: 500 }, (_, i) => ({
  key: (i + 1).toString().padStart(5, '0'),
  name: `白马N0.`+(i + 1).toString().padStart(5, '0')
}));


/**
 * 排除抽奖的用户列表（示例，适用于所有奖项）
 * 这些用户将不会参与任何奖项的抽奖
 */
export const excludedUsers: UserItem[] = [
];
