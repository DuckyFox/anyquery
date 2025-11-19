import {defineStore} from "pinia";
import {ref, computed} from "vue";

export const useItemsStore = defineStore('items', () => {
    const items = ref([
        {
            id: 1,
            brand: 'Luna',
            title: 'Средний Танковый Комплекс Т-34/76 образца 1942 года',
            isBestseller: true,
            discount: 10,
            fullPrice: 1200,
            priceWithDiscount: 1200 * ((100 - 10) / 100),
            imageLink: '',
            isInStock: true,
            category: 'Военная техника',
            size: '1:35'
        },
        {
            id: 2,
            brand: 'AeroMax',
            title: 'Истребитель Messerschmitt Bf 109 G-6',
            isBestseller: false,
            discount: 15,
            fullPrice: 1500,
            priceWithDiscount: 1500 * ((100 - 15) / 100),
            imageLink: '',
            isInStock: true,
            category: 'Авиация',
            size: '1:48'
        },
        {
            id: 3,
            brand: 'Civico',
            title: 'Легковой Автомобиль Toyota Supra A80',
            isBestseller: false,
            discount: 0,
            fullPrice: 1800,
            priceWithDiscount: 1800 * ((100 - 0) / 100),
            imageLink: '',
            isInStock: true,
            category: 'Военная техника',
            size: '1:24'
        },
        {
            id: 4,
            brand: 'StarForge',
            title: 'Космический Истребитель «Серебряный Лансер»',
            isBestseller: true,
            discount: 20,
            fullPrice: 2200,
            priceWithDiscount: 2200 * ((100 - 20) / 100),
            imageLink: '',
            isInStock: true,
            category: 'Авиация',
            size: '1:72'
        },
        {
            id: 5,
            brand: 'OceanCraft',
            title: 'Линкор «Ямато»',
            isBestseller: false,
            discount: 5,
            fullPrice: 2600,
            priceWithDiscount: 2600 * ((100 - 5) / 100),
            imageLink: '',
            isInStock: true,
            category: 'Корабли',
            size: '1:700'
        },
        {
            id: 6,
            brand: 'RailMaker',
            title: 'Паровоз серии Еа (СССР)',
            isBestseller: false,
            discount: 12,
            fullPrice: 1700,
            priceWithDiscount: 1700 * ((100 - 12) / 100),
            imageLink: '',
            isInStock: false,
            category: 'Военная техника',
            size: '1:87'
        },
        {
            id: 7,
            brand: 'MiniFig',
            title: 'Фигурка Рыцаря XIII века',
            isBestseller: false,
            discount: 0,
            fullPrice: 600,
            priceWithDiscount: 600 * ((100 - 0) / 100),
            imageLink: '',
            isInStock: true,
            category: 'Военная техника',
            size: '1:16'
        },
        {
            id: 8,
            brand: 'AeroMax',
            title: 'Штурмовик Ил-2',
            isBestseller: true,
            discount: 18,
            fullPrice: 1600,
            priceWithDiscount: 1600 * ((100 - 18) / 100),
            imageLink: '',
            isInStock: true,
            category: 'Авиация',
            size: '1:48'
        },
        {
            id: 9,
            brand: 'Civico',
            title: 'Грузовик Volvo FH16',
            isBestseller: false,
            discount: 10,
            fullPrice: 1900,
            priceWithDiscount: 1900 * ((100 - 10) / 100),
            imageLink: '',
            isInStock: false,
            category: 'Военная техника',
            size: '1:24'
        },
        {
            id: 10,
            brand: 'StarForge',
            title: 'Боевой Дрон «Чёрный Зенит»',
            isBestseller: true,
            discount: 25,
            fullPrice: 2100,
            priceWithDiscount: 2100 * ((100 - 25) / 100),
            imageLink: '',
            isInStock: true,
            category: 'Военная техника',
            size: '1:60'
        },
        {
            id: 11,
            brand: 'OceanCraft',
            title: 'Подводная лодка типа VII-C',
            isBestseller: false,
            discount: 8,
            fullPrice: 2000,
            priceWithDiscount: 2000 * ((100 - 8) / 100),
            imageLink: '',
            isInStock: true,
            category: 'Корабли',
            size: '1:350'
        },
        {
            id: 12,
            brand: 'Luna',
            title: 'Бронемашина M3 Scout Car',
            isBestseller: false,
            discount: 0,
            fullPrice: 1300,
            priceWithDiscount: 1300 * ((100 - 0) / 100),
            imageLink: '',
            isInStock: true,
            category: 'Военная техника',
            size: '1:35'
        },
        {
            id: 13,
            brand: 'MiniFig',
            title: 'Фигурка Самурая Эпохи Сэнгоку',
            isBestseller: true,
            discount: 15,
            fullPrice: 800,
            priceWithDiscount: 800 * ((100 - 15) / 100),
            imageLink: '',
            isInStock: true,
            category: 'Военная техника',
            size: '1:12'
        },
        {
            id: 14,
            brand: 'SpaceEra',
            title: 'Модель Ракеты Saturn V',
            isBestseller: true,
            discount: 5,
            fullPrice: 2500,
            priceWithDiscount: 2500 * ((100 - 5) / 100),
            imageLink: '',
            isInStock: false,
            category: 'Военная техника',
            size: '1:144'
        },
        {
            id: 15,
            brand: 'AeroMax',
            title: 'Пассажирский самолёт Boeing 737-800',
            isBestseller: false,
            discount: 10,
            fullPrice: 2100,
            priceWithDiscount: 2100 * ((100 - 10) / 100),
            imageLink: '',
            isInStock: true,
            category: 'Авиация',
            size: '1:144'
        },
        {
            id: 16,
            brand: 'Civico',
            title: 'Tram Tatra T3 — городской трамвай',
            isBestseller: false,
            discount: 5,
            fullPrice: 1700,
            priceWithDiscount: 1700 * ((100 - 5) / 100),
            imageLink: '',
            isInStock: true,
            category: 'Военная техника',
            size: '1:35'
        },
        {
            id: 17,
            brand: 'OceanCraft',
            title: 'Парусник «Клипер Астрея»',
            isBestseller: true,
            discount: 12,
            fullPrice: 2300,
            priceWithDiscount: 2300 * ((100 - 12) / 100),
            imageLink: '',
            isInStock: true,
            category: 'Корабли',
            size: '1:200'
        },
        {
            id: 18,
            brand: 'StarForge',
            title: 'Шагающий боевой мех «Титан-09»',
            isBestseller: false,
            discount: 18,
            fullPrice: 2600,
            priceWithDiscount: 2600 * ((100 - 18) / 100),
            imageLink: '',
            isInStock: true,
            category: 'Военная техника',
            size: '1:48'
        },
        {
            id: 19,
            brand: 'RailMaker',
            title: 'Электровоз ЧС2',
            isBestseller: false,
            discount: 10,
            fullPrice: 1800,
            priceWithDiscount: 1800 * ((100 - 10) / 100),
            imageLink: '',
            isInStock: false,
            category: 'Военная техника',
            size: '1:87'
        },
        {
            id: 20,
            brand: 'Luna',
            title: 'Бронетранспортёр «Boxer»',
            isBestseller: false,
            discount: 0,
            fullPrice: 1600,
            priceWithDiscount: 1600 * ((100 - 0) / 100),
            imageLink: '',
            isInStock: true,
            category: 'Военная техника',
            size: '1:35'
        },
        {
            id: 21,
            brand: 'Aurora',
            title: 'Сборная модель автомобиля Ferrari 488 GTB 1:24',
            isBestseller: true,
            discount: 15,
            fullPrice: 1200,
            priceWithDiscount: 1200 * ((100 - 15)/100),
            imageLink: '',
            isInStock: true,
            category: 'Военная техника',
            size: '1:24'
        },
        {
            id: 22,
            brand: 'Luna',
            title: 'Модульный робот-ассистент MK-II 1:18',
            isBestseller: false,
            discount: 10,
            fullPrice: 800,
            priceWithDiscount: 800 * ((100 - 10)/100),
            imageLink: '',
            isInStock: true,
            category: 'Военная техника',
            size: '1:18'
        },
        {
            id: 23,
            brand: 'HobbyTech',
            title: 'Сборная модель самолета Spitfire 1:32',
            isBestseller: true,
            discount: 20,
            fullPrice: 950,
            priceWithDiscount: 950 * ((100 - 20)/100),
            imageLink: '',
            isInStock: true,
            category: 'Авиация',
            size: '1:32'
        },
        {
            id: 24,
            brand: 'MiniArt',
            title: 'Сборная модель грузового поезда 1:87',
            isBestseller: false,
            discount: 5,
            fullPrice: 1100,
            priceWithDiscount: 1100 * ((100 - 5)/100),
            imageLink: '',
            isInStock: true,
            category: 'Военная техника',
            size: '1:87'
        },
        {
            id: 25,
            brand: 'Aurora',
            title: 'Сборная модель танка Tiger I 1:35',
            isBestseller: true,
            discount: 25,
            fullPrice: 1300,
            priceWithDiscount: 1300 * ((100 - 25)/100),
            imageLink: '',
            isInStock: false,
            category: 'Военная техника',
            size: '1:35'
        },
        {
            id: 26,
            brand: 'HobbyTech',
            title: 'Модель корабля USS Enterprise 1:350',
            isBestseller: false,
            discount: 10,
            fullPrice: 2000,
            priceWithDiscount: 2000 * ((100 - 10)/100),
            imageLink: '',
            isInStock: true,
            category: 'Корабли',
            size: '1:350'
        },
        {
            id: 27,
            brand: 'Luna',
            title: 'Сборная модель мотоцикла Ducati Panigale 1:12',
            isBestseller: true,
            discount: 15,
            fullPrice: 900,
            priceWithDiscount: 900 * ((100 - 15)/100),
            imageLink: '',
            isInStock: true,
            category: 'Мотоциклы',
            size: '1:12'
        },
        {
            id: 28,
            brand: 'MiniArt',
            title: 'Сборная модель космического шаттла 1:144',
            isBestseller: false,
            discount: 20,
            fullPrice: 1500,
            priceWithDiscount: 1500 * ((100 - 20)/100),
            imageLink: '',
            isInStock: true,
            category: 'Военная техника',
            size: '1:144'
        },
        {
            id: 29,
            brand: 'Aurora',
            title: 'Сборная модель вертолета AH-64 Apache 1:48',
            isBestseller: true,
            discount: 30,
            fullPrice: 1250,
            priceWithDiscount: 1250 * ((100 - 30)/100),
            imageLink: '',
            isInStock: false,
            category: 'Военная техника',
            size: '1:48'
        },
        {
            id: 30,
            brand: 'HobbyTech',
            title: 'Сборная модель грузового грузовика MAN 1:24',
            isBestseller: false,
            discount: 5,
            fullPrice: 750,
            priceWithDiscount: 750 * ((100 - 5)/100),
            imageLink: '',
            isInStock: true,
            category: 'Военная техника',
            size: '1:24'
        },
        {
            id: 31,
            brand: 'MiniArt',
            title: 'Сборная модель собаки-робота 1:18',
            isBestseller: true,
            discount: 15,
            fullPrice: 650,
            priceWithDiscount: 650 * ((100 - 15)/100),
            imageLink: '',
            isInStock: true,
            category: 'Военная техника',
            size: '1:18'
        },
        {
            id: 32,
            brand: 'Aurora',
            title: 'Модель здания Старой Мельницы 1:72',
            isBestseller: false,
            discount: 10,
            fullPrice: 400,
            priceWithDiscount: 400 * ((100 - 10)/100),
            imageLink: '',
            isInStock: true,
            category: 'Военная техника',
            size: '1:72'
        },
        {
            id: 33,
            brand: 'Luna',
            title: 'Сборная модель гоночного автомобиля McLaren 720S 1:24',
            isBestseller: true,
            discount: 20,
            fullPrice: 1300,
            priceWithDiscount: 1300 * ((100 - 20)/100),
            imageLink: '',
            isInStock: true,
            category: 'Военная техника',
            size: '1:24'
        },
        {
            id: 34,
            brand: 'HobbyTech',
            title: 'Сборная модель подводной лодки Typhoon 1:350',
            isBestseller: false,
            discount: 15,
            fullPrice: 1800,
            priceWithDiscount: 1800 * ((100 - 15)/100),
            imageLink: '',
            isInStock: true,
            category: 'Корабли',
            size: '1:350'
        },
        {
            id: 35,
            brand: 'MiniArt',
            title: 'Сборная модель динозавра T-Rex 1:20',
            isBestseller: true,
            discount: 25,
            fullPrice: 1000,
            priceWithDiscount: 1000 * ((100 - 25)/100),
            imageLink: '',
            isInStock: false,
            category: 'Военная техника',
            size: '1:20'
        },
        {
            id: 36,
            brand: 'Aurora',
            title: 'Сборная модель гоночного мотоцикла Yamaha YZF-R1 1:12',
            isBestseller: false,
            discount: 10,
            fullPrice: 850,
            priceWithDiscount: 850 * ((100 - 10)/100),
            imageLink: '',
            isInStock: true,
            category: 'Военная техника',
            size: '1:12'
        },
        {
            id: 37,
            brand: 'Luna',
            title: 'Сборная модель космической станции ISS 1:144',
            isBestseller: true,
            discount: 20,
            fullPrice: 1500,
            priceWithDiscount: 1500 * ((100 - 20)/100),
            imageLink: '',
            isInStock: true,
            category: 'Военная техника',
            size: '1:144'
        },
        {
            id: 38,
            brand: 'HobbyTech',
            title: 'Сборная модель пожарной машины 1:24',
            isBestseller: false,
            discount: 5,
            fullPrice: 700,
            priceWithDiscount: 700 * ((100 - 5)/100),
            imageLink: '',
            isInStock: true,
            category: 'Военная техника',
            size: '1:24'
        },
        {
            id: 39,
            brand: 'MiniArt',
            title: 'Сборная модель паровоза 1:87',
            isBestseller: true,
            discount: 15,
            fullPrice: 1200,
            priceWithDiscount: 1200 * ((100 - 15)/100),
            imageLink: '',
            isInStock: false,
            category: 'Военная техника',
            size: '1:87'
        },
        {
            id: 40,
            brand: 'Aurora',
            title: 'Сборная модель исторического замка 1:72',
            isBestseller: false,
            discount: 10,
            fullPrice: 950,
            priceWithDiscount: 950 * ((100 - 10)/100),
            imageLink: '',
            isInStock: true,
            category: 'Военная техника',
            size: '1:72'
        },
        {
            id: 41,
            brand: 'Luna',
            title: 'Сборная модель вертолета Bell 206 1:48',
            isBestseller: true,
            discount: 20,
            fullPrice: 1100,
            priceWithDiscount: 1100 * ((100 - 20) / 100),
            imageLink: '',
            isInStock: true,
            category: 'Военная техника',
            size: '1:48'
        },
        {
            id: 42,
            brand: 'HobbyTech',
            title: 'Сборная модель грузового корабля 1:350',
            isBestseller: false,
            discount: 5,
            fullPrice: 1300,
            priceWithDiscount: 1300 * ((100 - 5) / 100),
            imageLink: '',
            isInStock: true,
            category: 'Корабли',
            size: '1:350'
        },
        {
            id: 43,
            brand: 'MiniArt',
            title: 'Сборная модель автомобиля Ford Mustang 1:24',
            isBestseller: true,
            discount: 15,
            fullPrice: 1200,
            priceWithDiscount: 1200 * ((100 - 15) / 100),
            imageLink: '',
            isInStock: true,
            category: 'Военная техника',
            size: '1:24'
        },
        {
            id: 44,
            brand: 'Aurora',
            title: 'Сборная модель динозавра Triceratops 1:20',
            isBestseller: false,
            discount: 10,
            fullPrice: 900,
            priceWithDiscount: 900 * ((100 - 10) / 100),
            imageLink: '',
            isInStock: true,
            category: 'Военная техника',
            size: '1:20'
        },
        {
            id: 45,
            brand: 'Luna',
            title: 'Сборная модель самолета Boeing 747 1:144',
            isBestseller: true,
            discount: 25,
            fullPrice: 1700,
            priceWithDiscount: 1700 * ((100 - 25) / 100),
            imageLink: '',
            isInStock: false,
            category: 'Авиация',
            size: '1:144'
        },
        {
            id: 46,
            brand: 'HobbyTech',
            title: 'Сборная модель мотоцикла Harley-Davidson 1:12',
            isBestseller: false,
            discount: 5,
            fullPrice: 950,
            priceWithDiscount: 950 * ((100 - 5) / 100),
            imageLink: '',
            isInStock: true,
            category: 'Военная техника',
            size: '1:12'
        },
        {
            id: 47,
            brand: 'MiniArt',
            title: 'Сборная модель корабля Viking Longship 1:72',
            isBestseller: true,
            discount: 15,
            fullPrice: 1000,
            priceWithDiscount: 1000 * ((100 - 15) / 100),
            imageLink: '',
            isInStock: true,
            category: 'Корабли',
            size: '1:72'
        },
        {
            id: 48,
            brand: 'Aurora',
            title: 'Сборная модель танка T-34 1:35',
            isBestseller: false,
            discount: 10,
            fullPrice: 1200,
            priceWithDiscount: 1200 * ((100 - 10) / 100),
            imageLink: '',
            isInStock: true,
            category: 'Военная техника',
            size: '1:35'
        },
        {
            id: 49,
            brand: 'Luna',
            title: 'Сборная модель робота-андроида 1:18',
            isBestseller: true,
            discount: 20,
            fullPrice: 1400,
            priceWithDiscount: 1400 * ((100 - 20) / 100),
            imageLink: '',
            isInStock: true,
            category: 'Военная техника',
            size: '1:18'
        },
        {
            id: 50,
            brand: 'HobbyTech',
            title: 'Сборная модель грузового поезда 1:87',
            isBestseller: false,
            discount: 5,
            fullPrice: 1100,
            priceWithDiscount: 1100 * ((100 - 5) / 100),
            imageLink: '',
            isInStock: true,
            category: 'Военная техника',
            size: '1:87'
        }
    ]);

    const filterItems = () => {
        return items
    }

    const allBrands = computed(() => {
        const uniqueBrands = [...new Set(items.value.map((item)=>item.brand))]
        return uniqueBrands.map((brand,index) => {
            return {
                id: `${index}`,
                brand,
            }
        })
    })

    const allCategories = computed(() => {
        const categoriesArray = [...new Set(items.value.map((item) => item.category))]
        return categoriesArray.map((category, index) => {
            return {
                id: `${index +1}`,
                category
            }
        })
    })

    const allSizes = computed(() => {
        const sizesArray = [...new Set(items.value.map((item) => item.size))]
        return sizesArray.map((size, index) => {
            return {
                id: `${index +1}`,
                size,
            }
        })
    })

    return { items, filterItems, allBrands, allCategories, allSizes }
})