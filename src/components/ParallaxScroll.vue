<template>
    <div>
        <div class="parallax">
            <div class="ptitle">
                貓所在乎的 窩窩都知道
            </div>
            <div class="row">
                <div class="col-md-3"></div>
                <div class="col-md-6">
                    <div class="ptext">
                        「窩窩」創立於西元 2015 年，為了傳達愛貓的心情給更多人知道，提供優質服務與嚴選商品給所有愛貓人士。希望透過商品，祝福所有貓都能與人開心地一起生活，創造屬於彼此的生活回憶。
                    </div>
                </div>
                <div class="col-md-3"></div>
            </div>
        </div>
    </div>
</template>

<style scoped>

img {
    height: 350px;
    width: 100%;
    object-fit: cover;
}

.parallax {
    margin-top: 10px;
    background: url('../assets/prlx.jpg') no-repeat center;
    min-height: 100%;
    background-size: cover;
    background-attachment: fixed;
    height: 500px;
    position: relative;
}

.ptitle {
    font-family:"Microsoft JhengHei";
    position: absolute;
    top: 12rem;
    width: 100%;
    text-align: center;
    color: rgb(255, 255, 255);
    font-size: 24px;
    letter-spacing: 5px;
    text-transform: capitalize;
}

.ptext {
    font-family:"Microsoft JhengHei";
    position: absolute;
    top: 16rem;
    width: 100%;
    text-align: center;
    color: rgb(255, 255, 255);
    font-size: 18px;
    letter-spacing: 1px;
    text-transform: capitalize;
    padding: 0px 20px 0px 20px;
}

</style>
