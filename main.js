// import the library
import { NotifyLog } from 'notifylog'
import dotenv from 'dotenv'

if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

// create an instance of the library
const notifyLog = new NotifyLog(process.env.API_KEY)

// send a log
notifyLog.publish({
	name: "New user",
	description: "A new user has been created",
	channel: "database",
	icon: "👤",
	notify: true,
});