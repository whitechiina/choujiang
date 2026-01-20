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
export const user: UserItem[] = [
  ...[
    { key: 1001, name: '张三' },
    { key: 1002, name: '李四' },
    { key: 1003, name: '王五' },
    { key: 1004, name: '赵六' },
    { key: 1005, name: '钱七' },
    { key: 1006, name: '孙八' },
    { key: 1007, name: '周九' },
    { key: 1008, name: '吴十' }
  ]
];

/**
 * 排除抽奖的用户列表（示例，适用于所有奖项）
 * 这些用户将不会参与任何奖项的抽奖
 */
export const excludedUsers: UserItem[] = [
  { key: 1001, name: '张三' },
  { key: 1002, name: '李四' },
  { key: 1003, name: '王五' }
];
