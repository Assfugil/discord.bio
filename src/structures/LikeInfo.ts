import { Collection,Snowflake } from 'discord.js'
import PartialProfile from './PartialProfile'
type LikeInfo = {
  /**Total number of pages */
  pageTotal:number
  /**Users in this oage */
  users:Collection<Snowflake,PartialProfile>
}
export = LikeInfo