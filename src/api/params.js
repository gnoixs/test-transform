import { getStorage } from '@/assets/scripts/storage'

const user = getStorage('userInfo',sessionStorage,true);

export default {
  oid: (user && user.oid) || ''
}
