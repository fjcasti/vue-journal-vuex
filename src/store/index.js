import { createStore} from "vuex";
import journal from "../modules/daybook/store/journal";

const store = createStore ({
    // store global

    modules: {
        journal
    }
})

export default store