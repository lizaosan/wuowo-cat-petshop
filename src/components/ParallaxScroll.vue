<template>
    <div class="parallax">
        <section class="container">
            <div class="row justify-content-center">
                <div class="col-12 col-md-6 ptext">
                    <h2>貓所在乎的 窩窩都知道</h2>
                    <p>「窩窩」創立於西元 2015 年，為了傳達愛貓的心情給更多人知道，提供優質服務與嚴選商品給所有愛貓人士。希望透過我們的商品，祝福所有貓都能與人開心地一起生活，創造屬於彼此的生活回憶。</p>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped>

.parallax {
    margin-top: 10px;
    background: url('../assets/prlx.jpg');
    min-height: 400px;
    position: relative;
    opacity: 0.90;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    /*
        fixed = parallax
        scroll = normal
    */
    background-attachment: fixed;
}

.ptext {
    font-family:"Microsoft JhengHei";
    width: 100%;
    color: rgb(255, 255, 255);
    font-size: 18px;
    letter-spacing: 1px;
    text-transform: capitalize;
    position: absolute;
    top: 7.5rem;
}

</style>
