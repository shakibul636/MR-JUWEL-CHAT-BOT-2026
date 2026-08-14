module.exports.config = {
    name: "adminUpdate",
    eventType: ["log:thread-admins","log:thread-name","log:user-nickname","log:thread-icon","log:thread-call","log:thread-color"],
    version: "5.0.1",
    credits: "MD SHAKIBUL",
    description: "Update team info with 20+ random stylish themes",
    envConfig: {
        sendNoti: true,
    }
};

module.exports.run = async function ({ event, api, Threads, Users }) {
    const fs = require("fs");
    const themePath = __dirname + "/themes.json";

    // =============================
    // 🎨 Default + Premium Themes Setup
    // =============================
    if (!fs.existsSync(themePath)) {
        fs.writeFileSync(themePath, JSON.stringify({
            rainbow: { top: "🌈━━━━━━━━━━━━━━━🌈", title: "🔰  𝗨𝗣𝗗𝗔𝗧𝗘", bottom: "🌈━━━━━━━━━━━━━━━🌈", icon: "🌈" },
            red:     { top: "🔥━━━━━━━━━━━━━━━🔥", title: "⚡  𝗨𝗣𝗗𝗔𝗧𝗘", bottom: "🔥━━━━━━━━━━━━━━━🔥", icon: "🔥" },
            blue:    { top: "💙━━━━━━━━━━━━━━━💙", title: "🌊  𝗨𝗣𝗗𝗔𝗧𝗘", bottom: "💙━━━━━━━━━━━━━━━💙", icon: "💙" },
            pink:    { top: "🌸━━━━━━━━━━━━━━━🌸", title: "💖  𝗨𝗣𝗗𝗔𝗧𝗘", bottom: "🌸━━━━━━━━━━━━━━━🌸", icon: "🌸" },
            gold:    { top: "⚡━━━━━━━━━━━━━━━⚡", title: "✨  𝗨𝗣𝗗𝗔𝗧𝗘", bottom: "⚡━━━━━━━━━━━━━━━⚡", icon: "⚡" },
            neon:    { top: "💡━━━━━━━━━━━━━━━💡", title: "🌌  𝗡𝗘𝗢𝗡 𝗨𝗣𝗗𝗔𝗧𝗘", bottom: "💡━━━━━━━━━━━━━━━💡", icon: "💡" },
            cyber:   { top: "🤖━━━━━━━━━━━━━━━🤖", title: "⚙️  𝗖𝗬𝗕𝗘𝗥 𝗨𝗣𝗗𝗔𝗧𝗘", bottom: "🤖━━━━━━━━━━━━━━━🤖", icon: "🤖" },
            diamond: { top: "💎━━━━━━━━━━━━━━━💎", title: "💠  𝗗𝗜𝗔𝗠𝗢𝗡𝗗", bottom: "💎━━━━━━━━━━━━━━━💎", icon: "💎" },
            fireworks: { top: "🎆━━━━━━━━━━━━━━━🎆", title: "✨  𝗖𝗘𝗟𝗘𝗕𝗥𝗔𝗧𝗘", bottom: "🎆━━━━━━━━━━━━━━━🎆", icon: "🎆" },
            galaxy:  { top: "🌌━━━━━━━━━━━━━━━🌌", title: "🪐  𝗚𝗔𝗟𝗔𝗫𝗬", bottom: "🌌━━━━━━━━━━━━━━━🌌", icon: "🌌" },
            dragon:  { top: "🐉━━━━━━━━━━━━━━━🐉", title: "🔥  𝗗𝗥𝗔𝗚𝗢𝗡", bottom: "🐉━━━━━━━━━━━━━━━🐉", icon: "🐉" },
            skull:   { top: "💀━━━━━━━━━━━━━━━💀", title: "☠️  𝗦𝗞𝗨𝗟𝗟", bottom: "💀━━━━━━━━━━━━━━━💀", icon: "💀" },
            samurai: { top: "⚔️━━━━━━━━━━━━━━━⚔️", title: "🥷  𝗦𝗔𝗠𝗨𝗥𝗔𝗜", bottom: "⚔️━━━━━━━━━━━━━━━⚔️", icon: "⚔️" },
            toxic:   { top: "☣️━━━━━━━━━━━━━━━☣️", title: "💀  𝗧𝗢𝗫𝗜𝗖", bottom: "☣️━━━━━━━━━━━━━━━☣️", icon: "☣️" },
            matrix:  { top: "🟩━━━━━━━━━━━━━━━🟩", title: "💻  𝗠𝗔𝗧𝗥𝗜𝗫", bottom: "🟩━━━━━━━━━━━━━━━🟩", icon: "🟩" },
            space:   { top: "🚀━━━━━━━━━━━━━━━🚀", title: "🌠  𝗦𝗣𝗔𝗖𝗘", bottom: "🚀━━━━━━━━━━━━━━━🚀", icon: "🚀" },
            ice:     { top: "❄️━━━━━━━━━━━━━━━❄️", title: "🧊  𝗜𝗖𝗘", bottom: "❄️━━━━━━━━━━━━━━━❄️", icon: "❄️" },
            rose:    { top: "🌹━━━━━━━━━━━━━━━🌹", title: "💐  𝗥𝗢𝗦𝗘", bottom: "🌹━━━━━━━━━━━━━━━🌹", icon: "🌹" },
            king:    { top: "👑━━━━━━━━━━━━━━━👑", title: "⚜️  𝗞𝗜𝗡𝗚", bottom: "👑━━━━━━━━━━━━━━━👑", icon: "👑" },
            ninja:   { top: "🥷━━━━━━━━━━━━━━━🥷", title: "⚔️  𝗡𝗜𝗡𝗝𝗔", bottom: "🥷━━━━━━━━━━━━━━━🥷", icon: "🥷" }
        }, null, 2));
    }

    let themes = JSON.parse(fs.readFileSync(themePath));

    // =============================
    // 🎯 Helper: Random Theme
    // =============================
    function getRandomTheme() {
        const keys = Object.keys(themes);
        return themes[keys[Math.floor(Math.random() * keys.length)]];
    }

    // =============================
    // 🎯 Helper: Mention Highlight
    // =============================
    async function mentionUser(id) {
        const name = await Users.getNameUser(id);
        return {
            text: `✨ @${name} ✨`,
            mentions: [{ tag: `@${name}`, id }]
        };
    }

    const { threadID, logMessageType, logMessageData } = event;

    // ✅ Thread Info Load & Default Setup
    let threadData = await Threads.getData(threadID);
    if (!threadData) threadData = {};
    if (!threadData.threadInfo) threadData.threadInfo = {};

    let dataThread = threadData.threadInfo;
    dataThread.adminIDs = dataThread.adminIDs || [];
    dataThread.nicknames = dataThread.nicknames || {};
    dataThread.threadName = dataThread.threadName || "";
    dataThread.threadIcon = dataThread.threadIcon || "";
    dataThread.threadColor = dataThread.threadColor || "";

    // =============================
    // 🎯 Log Event Handler
    // =============================
    try {
        switch (logMessageType) {
            case "log:thread-admins": {
                const t = getRandomTheme();
                if (logMessageData.ADMIN_EVENT == "add_admin") {
                    dataThread.adminIDs.push({ id: logMessageData.TARGET_ID });
                    const m = await mentionUser(logMessageData.TARGET_ID);
                    api.sendMessage(
`${t.top}
${t.title} | 𝗔𝗱𝗺𝗶𝗻
${t.bottom}
👤 ${m.text}
✅ তাকে Admin করা হয়েছে।
`, threadID, { mentions: m.mentions });
                }
                else if (logMessageData.ADMIN_EVENT == "remove_admin") {
                    dataThread.adminIDs = dataThread.adminIDs.filter(item => item.id != logMessageData.TARGET_ID);
                    const m = await mentionUser(logMessageData.TARGET_ID);
                    api.sendMessage(
`${t.top}
${t.title} | 𝗔𝗱𝗺𝗶𝗻
${t.bottom}
👤 ${m.text}
❌ তার Admin রোল মুছে ফেলা হয়েছে।
`, threadID, { mentions: m.mentions });
                }
                break;
            }

            case "log:thread-icon": {
                const t = getRandomTheme();
                dataThread.threadIcon = event.logMessageData.thread_icon || "👍";
                api.sendMessage(
`${t.top}
${t.title} | 𝗜𝗰𝗼𝗻
${t.bottom}
🆕 নতুন Icon: ${dataThread.threadIcon}
`, threadID);
                break;
            }

            case "log:thread-call": {
                const t = getRandomTheme();
                if (logMessageData.event === "group_call_started") {
                    const m = await mentionUser(logMessageData.caller_id);
                    api.sendMessage(
`${t.top}
${t.title} | 𝗖𝗮𝗹𝗹
${t.bottom}
👤 ${m.text}
▶️ ${(logMessageData.video) ? 'ভিডিও' : ''} কল শুরু করেছেন।
`, threadID, { mentions: m.mentions });
                } else if (logMessageData.event === "group_call_ended") {
                    const callDuration = logMessageData.call_duration;
                    const hours = Math.floor(callDuration / 3600);
                    const minutes = Math.floor((callDuration - (hours * 3600)) / 60);
                    const seconds = callDuration - (hours * 3600) - (minutes * 60);
                    const timeFormat = `${hours}h ${minutes}m ${seconds}s`;
                    api.sendMessage(
`${t.top}
${t.title} | 𝗖𝗮𝗹𝗹
${t.bottom}
📴 কল শেষ হয়েছে।
⏳ সময়কাল: ${timeFormat}
`, threadID);
                } else if (logMessageData.joining_user) {
                    const m = await mentionUser(logMessageData.joining_user);
                    api.sendMessage(
`${t.top}
${t.title} | 𝗖𝗮𝗹𝗹
${t.bottom}
✨ ${m.text} Wlc Join The Call।
`, threadID, { mentions: m.mentions });
                }
                break;
            }

            case "log:thread-color": {
                const t = getRandomTheme();
                dataThread.threadColor = event.logMessageData.thread_color || "🌤";
                api.sendMessage(
`${t.top}
${t.title} | 𝗖𝗼𝗹𝗼𝗿
${t.bottom}
🎨 নতুন রঙ: ${event.logMessageBody.replace("Theme", "Color")}
`, threadID);
                break;
            }

            case "log:user-nickname": {
                const t = getRandomTheme();
                dataThread.nicknames[logMessageData.participant_id] = logMessageData.nickname;
                const m = await mentionUser(logMessageData.participant_id);
                api.sendMessage(
`${t.top}
${t.title} | 𝗡𝗶𝗰𝗸𝗻𝗮𝗺𝗲
${t.bottom}
👤 ${m.text}
➡️ নতুন নাম: ${(logMessageData.nickname.length == 0) ? "Original Name" : logMessageData.nickname}
`, threadID, { mentions: m.mentions });
                break;
            }

            case "log:thread-name": {
                const t = getRandomTheme();
                dataThread.threadName = event.logMessageData.name || "No name";
                api.sendMessage(
`${t.top}
${t.title} | 𝗡𝗮𝗺𝗲
${t.bottom}
🆕 নতুন নাম: ${dataThread.threadName}
`, threadID);
                break;
            }
        }

        // ✅ Save Updated Data
        await Threads.setData(threadID, { threadInfo: dataThread });
    } catch (e) { console.log(e) };
};
