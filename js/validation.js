function validation(input) {
    const error =
        input.parentElement.querySelector(".error") ||
        input.parentElement.parentElement.querySelector(".error");

    const rules = input.getAttribute("rules");
    if (!rules) return;
    const ruleList = rules.split("|");
    ruleList.forEach((item, idx) => {
        item = item.split("-");
        ruleList[idx] = item;
    });

    let message;

    ruleList.forEach((item) => {
        if (message) return;
        switch (item[0]) {
            case "require":
                if (!input.value || input.value === "none")
                    message = "This field must be required";
                else message = undefined;
                break;
            case "max":
                if (input.value.length > Number(item[1]))
                    message = "This field must be max " + item[1];
                else message = undefined;
                break;
            case "confirm":
                if (password.value !== input.value)
                    message = "This field must be exact with passsword field";
                else message = undefined;
                break;
            default:
                break;
        }
    });

    if (message) {
        error.innerText = message;
        return true;
    }

    error.innerText = null;
    return false;
}

export{validation};