document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll("img");


    const genshinpics = ["https://upload-os-bbs.hoyolab.com/upload/2024/06/26/e8f01c57b1444f41ff661697d82eb142_2857707509587771457.jpg?x-oss-process=image%2Fresize%2Cs_1000%2Fauto-orient%2C0%2Finterlace%2C1%2Fformat%2Cwebp%2Fquality%2Cq_70",
    "https://upload-os-bbs.hoyolab.com/upload/2024/08/07/038bdffb46e64e98b56a59fa885d03c9_3396502526427989670.jpg?x-oss-process=image%2Fresize%2Cs_1000%2Fauto-orient%2C0%2Finterlace%2C1%2Fformat%2Cwebp%2Fquality%2Cq_70", 
    "https://upload-os-bbs.hoyolab.com/upload/2024/07/11/7a471de5e71eb47e8bb07efea1643688_9083962187772252673.jpg?x-oss-process=image%2Fresize%2Cs_1000%2Fauto-orient%2C0%2Finterlace%2C1%2Fformat%2Cwebp%2Fquality%2Cq_70",
    "https://upload-os-bbs.hoyolab.com/upload/2023/12/27/962f7f25376d58bc7466f4c53090ea6e_8047659536302038986.jpg?x-oss-process=image%2Fresize%2Cs_1000%2Fauto-orient%2C0%2Finterlace%2C1%2Fformat%2Cwebp%2Fquality%2Cq_70"];

    const randompics = getRandomItem(genshinpics);

    console.log(randompics)

    for(const image of images){
        console.log(image)
        //fetch(randompics)
        //.then(response => response.json())
        //.then(data => randompics.src = data.message)
        image.src = randompics
    }
})


function getRandomItem(arr) {
    // Ensure the array is not empty
    if (arr.length === 0) return undefined;

    // Generate a random index
    const randomIndex = Math.floor(Math.random() * arr.length);

    // Return the item at the random index
    return arr[randomIndex];
}