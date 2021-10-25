const userList = [

    {
        userName: `Mario Rossi`,
        paragraph: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo a obcaecati modi fuga, animi non excepturi, nemo nobis facilis doloremque rem suscipit qui corporis ipsam beatae! Quis provident illo atque.`,
        image: `https://i.picsum.photos/id/215/300/300.jpg?hmac=fbcOUjHvJU-TDq0Lsbc_lPoR8aKijF4nXbuUlKTDvKw`,
        numeroLikes: `0`,
        dataCreazione: `0`,
    },
    {
        userName: `Francesco Grigio`,
        paragraph: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo a obcaecati modi fuga, animi non excepturi, nemo nobis facilis doloremque rem suscipit qui corporis ipsam beatae! Quis provident illo atque.`,
        image: `https://i.picsum.photos/id/215/300/300.jpg?hmac=fbcOUjHvJU-TDq0Lsbc_lPoR8aKijF4nXbuUlKTDvKw`,
        numeroLikes: `0`,
        dataCreazione: `0`,
    },
    {
        userName: `Mario Draghi`,
        paragraph: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo a obcaecati modi fuga, animi non excepturi, nemo nobis facilis doloremque rem suscipit qui corporis ipsam beatae! Quis provident illo atque.`,
        image: `https://i.picsum.photos/id/215/300/300.jpg?hmac=fbcOUjHvJU-TDq0Lsbc_lPoR8aKijF4nXbuUlKTDvKw`,
        numeroLikes: `0`,
        dataCreazione: `0`,
    }




]

for (let index = 0; index < userList.length; index++) {
    const member = userList[index];
    const element = `
    
    <div class="card ">
            <h3>${userName}</h3>

            <p>${paragraph}</p>

            <div>${dataCreazione}</div>

            <div>
                <img src="${member.image}" alt="">
            </div>

            <div>${member.numeroLikes}</div>

            

        </div>
    `

    document.querySelector(`.row`).insertAdjacentHTML(`beforeend`, element)
    console.log(document.querySelector(`.row`));
}