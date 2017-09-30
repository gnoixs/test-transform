
// 存数据
export function setStorage(itemName, item, type) {
  if(typeof type != 'undefined'){   // 说明存在localStorage或sessionStorage
    type.setItem(itemName, typeof item != 'string' ? JSON.stringify(item) : item);
  }else{
    throw new Error('该浏览器不支持'+type);
    // 存在cookie里面
  }
}
// 读取数据
export function getStorage(itemName,type,flag){
  if(typeof type != 'undefined'){
    return flag ? JSON.parse(type.getItem(itemName)) : type.getItem(itemName);
  }else{
    throw new Error('该浏览器不支持'+type);
    // 从cookie里面取
  }
}
// 删除条数据
export function removeStorage(itemName,type){
  if(typeof type != 'undefined'){
    type.removeItem(itemName);
  }else{
    throw new Error('该浏览器不支持'+type);
    // 从cookie里面删除单个
  }
}

// 整个清除
export function clearStorage(type){
  if(typeof type != 'undefined'){
    type.clear();
  }else{
    throw new Error('该浏览器不支持'+type);
    // 从cookie里面删除
  }
}

