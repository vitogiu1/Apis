import Firebase from "./FirebaseApp";
const database = Firebase.firestore();

export default {
    gen(Level) {
        var Key = ""
        var string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for(var i = 0; i < Level; i++){
            Key += string.charAt(Math.floor(Math.random() * string.length))
        }
        return Key;
    },
    async validate(Info, Type) {
        var dbKeys = [];
        var isValid;
        if (Type == "key") {
            if(!Info || Info.length < 1){
                return false;
            }
            const Data = await database.collection("keys").where('key', "==", Info).get();
            if (Data.empty) {
                return isValid = false;
            }
            Data.forEach(x => {
                dbKeys.push(x.data())
            });
            if (dbKeys[0].valid == true) {
                isValid = true;
            } else {
                isValid = false;
            }
            return isValid;
        } else {
        // reverse
            const Data = await database.collection("keys").where('Email', "==", Info).get();
            if (Data.empty) {
                return isValid = true;
            }
            Data.forEach(x => {
                dbKeys.push(x.data())
            });
            if (dbKeys[0].valid == true) {
                isValid = false;
            } else {
                isValid = false;
            }
            return isValid;
        }
    }
}