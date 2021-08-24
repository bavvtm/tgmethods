import { Methods } from "../src";

(async () => {
    const m = new Methods("1918579872:AAEAkCHU4rMtBNtZI_WbPlGeAaq5ceuI7Z8")
    const aaa = await m.sendMessage({
        chat_id: 1777450245,
        text: "HALO"
    })

    console.log(aaa);
})();