
// 输出错误信息
function ThrowErr(storageType){
  throw new Error('该浏览器不支持'+storageType)
}

// 存数据
export function setStorage(storageType,itemName, item) {
  storageType ? storageType.setItem(itemName, JSON.stringify(item)) : ThrowErr(storageType);
}
// 读取数据
export function getStorage(storageType,itemName){
  return storageType ? JSON.parse(storageType.getItem(itemName)): ThrowErr(storageType);
}
// 删除条数据
export function removeStorage(storageType,itemName){
  storageType ? storageType.removeItem(itemName) : ThrowErr(storageType);
}

// 整个清除
export function clearStorage(storageType){
  storageType ? storageType.clear() : ThrowErr(storageType);
}



