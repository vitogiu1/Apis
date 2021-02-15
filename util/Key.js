import Firebase from "./FirebaseApp";
const database = Firebase.firestore()
export default {
    gen(Level) {
        var Key;
        if (Level == 1) {
            Key = Math.random().toString(36).substring(2);
        }
        if (Level == 2) {
            Key = Math.random().toString(36).substring(2) + Math.random().toString(36).substring(1);
        }
        if (Level == 3) {
            Key = Math.random().toString(36).substring(2) + Math.random().toString(36).substring(1) + Math.random().toString(36).substring(3);
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