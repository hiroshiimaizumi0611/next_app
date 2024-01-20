import { PrismaClient } from "@prisma/client";
import React from "react";

const fetchUsers = async () => {
  const prisma = new PrismaClient();
  return await prisma.user.findMany();
};

export default async function UserList() {
  const users = await fetchUsers();
  console.log(users);
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">
        登録ユーザー
      </h2>
      <div className="overflow-hidden shadow-md sm:rounded-lg">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                名前
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                メールアドレス
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users.map((user, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {user.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {user.email}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
