export function kolobok(name) {
    switch (name) {
        case "Дедушка":
            return "От дедушки ушел";
            break;
        case "Заяц":
            return "От зайца ушел";
            break;
        case "Лиса":
            return "Колобка съели";
            break;
        default:
            return "Бабушка колобка пригрела";
            break;
    }
}

export const newYear = (name) => {
    switch(name) {
        case "Дед Мороз":
        case "Снегурочка":
            return `${name},${name},${name}!`;
            break;
        default: return "Допустимые значения - 'Дед Мороз' и 'Снегурочка'";
    }
    
}

export const newYear2 = (name) => {
    if(name === "Дед Мороз" || name === "Снегурочка") {
        return `${name},${name},${name}!`;
    }
    return "Допустимые значения - 'Дед Мороз' и 'Снегурочка'"; 
}
