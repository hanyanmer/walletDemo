/* eslint-disable */
// 该文件由 OneAPI 自动生成，请勿手动修改！
import { request } from '@umijs/max';

/** 此处后端没有提供注释 GET /api/v1/queryUserList */
export async function queryAuth(
  params: {

  },
  options?: { [key: string]: any },
) {
  return request('/api/v1/auth', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
export async function updateAuth(
  params: {
    auth:string
  },
  options?: { [key: string]: any },
) {
  return request('/api/v1/auth', {
    method: 'PUT',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}




