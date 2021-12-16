<template>
    <div class="p-goals">
        <div class="p-goals__btn-home" @click="pathToHome">
            <div class="p-goals__wrapper-imgs">
                <svg>
                    <defs>
                        <linearGradient id="GradientColor">
                            <stop offset="0" stop-color="#f88d12"/>
                            <stop offset="100%" stop-color="#e91841"/>
                        </linearGradient>
                    </defs>
                    <circle  cx="16" cy="16" r="14" stroke-linecep="round"/>
                </svg>
                <img :src="btnHome" alt="">
            </div>
        </div>
        <div class="section-p-goals">
            <div class="wrapper-p-goals">
                <div class="wrapper-p-goals__title">
                    <h1>
                        ТОП-5
                    </h1>
                    <p>
                        Мои цели
                    </p>
                </div>
                <div class="wrapper-p-goals__tabs" id="defaultDblock" :class="{active : !isActivated}">
                    <div class="container-goals">
                        <div class="container-wrapper-tabs-goals">
                            <div class="wrapper-tabs-goals">
                                <div class="wrapper__tabs">
                                    <button v-for="btn in btnData" :key="btn.id" @click="showTab(btn)" :class="{active : btn.id === selectedId}">
                                        <div class="wrapper-iconic__btn"  :class="{active : btn.id === selectedId}">
                                            <div class="wrapper-iconic__btn-center">
                                                <img :src="btn.iconic" alt="">
                                            </div>
                                            <div class="arrow" :class="{active : btn.id === selectedId}"></div>
                                        </div>
                                        <div class="wrapper-text__btn">
                                            <span :class="{active : btn.id === selectedId}">
                                                {{ btn.number }}
                                            </span>
                                            <p :class="{active : btn.id === selectedId}">
                                                {{ btn.btnText }}
                                            </p>
                                        </div>
                                    </button>
                                </div>
                                <div class="wrapper-p-content" v-for="tabInfo in tabsInfo" :key="tabInfo.id">
                                    <h2 v-if="tabInfo.id === selectedId">
                                        {{ tabInfo.title }}
                                    </h2>
                                    <p v-html="tabInfo.content" v-if="tabInfo.id === selectedId">
                                        {{ tabInfo.content }}
                                    </p>
                                    <button v-if="tabInfo.id === selectedId" class="btn-next" @click="btnNext" :class="{notActive: noneToBtn}">
                                        Далее
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="accordion-mob" id="according" :class="{active: isActivated}">
                    <ul class="accordion-mob-list">
                        <li class="accordion-mob-item" v-for="btn in btnData" :key="btn.id"  @click="testToggle = !testToggle  ? selected = btn.id : selected = undefined ">
                            <!-- <div class="accordion-mob-item__title" :class="{active : btn.id == selected}">
                                <div class="accordion-mob-item__title_whiteBg">
                                    <h3 :class="{active:btn.id == selected}">
                                        {{btn.btnText}}
                                    </h3>
                                </div>
                                <div class="accordion-mob-item__arrow" :class="{active:btn.id == selected}"></div>
                            </div> -->
                            <div class="wrapper-accord-btns">
                                <div class="accordion-mob-item__title" :class="{active : btn.id == selected}">
                                    <div class="accordion-mob-item__title_whiteBg">
                                        <img :src="btn.iconic" alt="">
                                    </div>
                                    <div class="accordion-mob-item__arrow" :class="{active:btn.id == selected}"></div>
                                </div>
                                <div class="wrapper-accord-btn__content">
                                    <span class="wrapper-accord-btn__number" :class="{active:btn.id == selected}">
                                        {{ btn.number }}
                                        <span class="wrap-line" :class="{active:btn.id == selected}"></span>
                                    </span>
                                    <p class="wrapper-accord-btn__text" :class="{active:btn.id == selected}">
                                        {{ btn.btnText }}
                                    </p>
                                </div>
                            </div>
                            <div class="accordion-mob-item__content" v-for="text in tabsInfo" :key="text.id" :class="{active:btn.id == selected}">
                                <p v-if="text.id == selected" v-html="text.content">
                                    {{ text.content }}
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>
<script>
import Footer from './subcomponents/footer.vue'
import Accordion from './subcomponents/Accordion.vue'
export default {
    name: 'goals',
    components:{
        Footer,
        Accordion
    },
    data() {
        return{
            noneToBtn: false,
            btnHome:require('../assets/image/section/btnHome.png'),
            testToggle: false,
            jsonGif: require('../assets/image/gif/gif.json'),
            isActivated: true,
            selected: undefined,
            isActived: true,
            classToAfter: '::after',
            selectedId: 1,
            isActive: false,
            colors : ['rgb(248, 141, 18), rgb(225, 47, 82), rgb(241, 13, 59), rgb(247, 0, 49), rgb(238, 10, 10)', ' rgb(248, 141, 18), rgb(225, 47, 82), rgb(241, 13, 59), rgb(247, 0, 49), rgb(238, 10, 10)', ' rgb(248, 141, 18), rgb(225, 47, 82), rgb(241, 13, 59), rgb(247, 0, 49), rgb(238, 10, 10)', ' rgb(248, 141, 18), rgb(225, 47, 82), rgb(241, 13, 59), rgb(247, 0, 49), rgb(238, 10, 10)', ' rgb(248, 141, 18), rgb(225, 47, 82), rgb(241, 13, 59), rgb(247, 0, 49), rgb(238, 10, 10)'],
            btnData:[
                {
                    id: 1,
                    number: '01',
                    btnText: 'КАГЭС-1 Национальный проект',
                    iconic: require('../assets/image/section/iconic-1.png'),
                },
                {
                    id: 2,
                    number: '02',
                    btnText: 'Возобновляемые источники энергии',
                    iconic: require('../assets/image/section/iconic-2.png'),
                },
                {
                    id: 3,
                    number: '03',
                    btnText: 'Строительство малых ГЭС',
                    iconic: require('../assets/image/section/iconic-3.png'),
                },
                {
                    id: 4,
                    number: '04',
                    btnText: 'Кыргызстанские национальные гидроэнергострой компании на международной арене!',
                    iconic: require('../assets/image/section/iconic-4.png'),
                },
                {
                    id: 5,
                    number: '05',
                    btnText: 'Система управления!',
                    iconic: require('../assets/image/section/iconic-5.png'),
                },
            ],
            tabsInfo:[
                {
                    id:1,
                    title: 'КАГЭС-1 Национальный проект',
                    content: '<b>Заняться вопросом строительства КАГЭС-1 и присвоить строительству статус «Национальный Проект»</b> <br> <br> <b>Что ведет Кыргызскую Республику из состояния избыточной к дефицитной?</b> <br> <br> - Отсутствие планов по вводу новых мощностей в энергосистему КР.<br> <br> - Отсутствие понимания, что через несколько лет эту сферу ждёт крупный крах.<br> <br> - Отсутствие плана по уменьшению импорта электроэнергии из соседних стран, когда данные поставки значительно превышают национальные тарифы. Вы только представьте, импортные цены – превышают национальные тариф… <br> <br> <b>Что может спасти ситуацию?</b> <br> <br> - Развитие энергетики Республики посредством привлечения иностранных инвестиций для строительства новых гидроэлектростанций <br> <br>- Реконструкция существующих источников электроэнергии <br> <br> - Сделать приоритетным инвестиционным проектом строительство каскада Камбаратинской ГЭС-1 и ГЭС-2, где суммарная установленная мощность составляет 2260 МВт и среднегодовая гарантированная выработка электроэнергии – более 6,0 млрд. кВт. <br> <br>- Приостановить строительство всех ГЭС, независимо от их мощностей, а также государственные строительства зданий и сооружений, которые требуют любых затрат в виде государственных денежных средств или кредитных средств.<br> <br>- Направить эти средства на строительство КАГЭС-1<br> <br> - Перенаправить приоритетность Верхнего Нарынского каскада после того, как стадия строительства КАГЭС-1 достигнет 50%-го прогресса строительства.<br> <br> <b>Ближе к делу</b><br> <br> Наше государство может начать строительство КАГЭС-1 в виде «Ашар», создать «Фонд строительства КАГЭС-1» и дать статус «Национального проекта». И, после того, как один агрегат будет запущен, все международные организации будут уверены в том, что КАГЭС-1 будет завершен, смогут понять процесс и время строительства, что даст безусловно ожидаемую грантовую и кредитную поддержку с их сторон.<br> <br> В результате - за определенный период мы сможем обеспечить всю страну электроэнергией. Более того, сможем создать благоприятные условия для экспорта электричества и перейдём к реализации CASA-1000 – экспорта электроэнергии в Пакистан и Афганистан по минимальной цене $5 за 1кВт. Вопросы? <br> <br>Очень много моментов и вопросов, которые необходимо сопоставить друг с другом, чтобы понять истинную причину провала привлеченных несколько раз иностранных инвестиций. Необходимо понять почему все предыдущие опыты не были положительными и до сих пор мы ничего путного для энергетики Кыргызстана не сдалали?<br> <br> Однако для строительства КАГЭС -1 было привлечено несколько иностранных инвестиции, но результаты были не положительными и, в последствии чего, мы до сегодняшнего дня не начали возведения этого весьма значительного для энергетики Кыргызстана КАГЭС-1.'
                },
                {
                    id:2,
                    title: 'Возобновляемые источники энергии',
                    content: '<b>Планы вроде есть, а с дефицитом до сих пор не справились </b> <br> <br> Есть многолетние планы по созданию возобновляемых источников энергии. Планы есть, но до сих пор не удалось воплотить их и показать эффективность на реальных проектах, где уже установлены солнечные и ветряные электростанции в Кыргызстане. <b>Что необходимо?</b> <br> <br>Необходимо рассмотреть уже имеющиеся ресурсы, которые были установлены частными компаниями или же только планируются установить.<br> <br> Необходимо ознакомиться с проблемами по их установке. <br> <br>Разработать проект по возведению «пилотных» станций ВИЭ (по типу СЭС и ВЭС), в каждой области Кыргызстана.<br> <br> <b>Какие сложности?</b> <br> <br>Нежелание руководства создать все благоприятные условия для того, чтобы не создавались искусственные преграды для строительства станций ВИЭ. Интересы отдельных лиц относительно того или иного проекта всегда связанны с их личными желаниями, иначе, как можно объяснить, что во вроде бы прозрачном «пути» от создания проекта станции до реализации появляются непредвиденные проблемы?<br> <br> <b>Актуальность СЭС и ВЭС</b><br> <br> Как вы знаете – себестоимость солнечной и ветровой электроэнергии в несколько раз выше себестоимости традиционных электростанций.<br> <br> Так следует ли рассматривать строительство СЭС и ВЭС в зоне централизованного энергоснабжения, как нерациональное вложение денежных средств?<br> <br> Чтобы понять актуальность и реальный выхлоп от СЭС и ВЭС – необходимо более детально изучить данный вопрос и оценить целесообразность применения СЭС и ВЭС в наших условия. Необходимо и учесть наблюдающие тенденции в области мировой энергетики и обратиться к опыту стран, которые ответили на данный вопрос, исходя из своих анализов, и перенять опыт. Также, следует изучить и выделить основные проблемы на пути внедрения СЭС и ВЭС.'},
                {
                    id:3,
                    title:'Строительств малых ГЭС',
                    content: '<b>Здесь мы и приводим в соответствие закон о майнинг фермах</b><br> <br>  <b>История МГЭС</b><br> <br> История малых ГЭС начинается с конца XIX века, когда электричество начали генерировать для небольших промышленных объектов: в текстильной промышленности, для водяных мельниц и лесопилок. В то время Центральная Европа была основным место создания малых ГЭС. К началу XX века технологии малой гидроэнергетики начали применять по всему миру.<br> <br> <b>Применение МГЭС в Кыргызстане</b> <br> <br>Малые ГЭС могут разрабатываться на основе строительства новых объектов или реконструкции существующих плотин, основное предназначение которых – это управление паводками или ирригация.<br> <br> <b>Начнём с того, что имеем!</b> <br> <br><b>Старые объекты по производству гидроэлектроэнергии в городской черте – также могут быть реконструированы и это позволит достигать большой экономии в плане инвестиций в энергосферу.</b><br> <br> <b>Заброшенные объекты водного угодья – могут быть использованы повторно и введены в эксплуатацию.</b> <br> <br><b>Это все не «проблемы», как кажется на первый взгляд, а наоборот, преимущество в виде экономии и сохранении рентабельности развития МГЭС.</b> <br> <br> <span><b>«Малые ГЭС рентабельны, экологичны и помогают сохранять полезные ископаемые.»</b></span>'},
                {
                    id:4,
                    title:'Кыргызстанские национальные гидроэнергострой компании на международной арене!',
                    content: '<b>Создать новую компанию международного уровня на базе существующих гидроэнергострой компаний!</b><br> <br> Создание национальной компании Международного уровня – дело нехитрое. Суть идёт о цели компании, которая будет смело представлять Кыргызстан на международной арене, соответствуя всем международным стандартам.<br> <br> <b>Команда и менеджмент!</b><br> <br> Как мы поняли чуть ранее, создать компанию не сложно. Но как быть с топ-менеджментом и кадрами? <br> <br>Инженеры, менеджеры и супервайзеры обязательно должны пройти обучение за рубежом! Только так они поймут, что на самом деле означает международные стандарты и как не создавать «продукт на один день».<br> <br> Целью этой инициативы является создание команды высококвалифицированных специалистов, которые могут строить систему управления и руководствуются международными стандартами. Обеспечение достойной и конкурентоспособной работой молодых специалистов, которые стремятся уехать за рубеж на заработки. <br> <br>Необходимо создать на ПТУ курсы по подготовке специалистов узкого профиля и повышение квалификации специалистов.'},

                {
                    id:5,
                    title:'Система управления!',
                    content: '<b>Дублирующие организации… </b> <br><br> Так много дублирующих обязанности друг друга организаций и так мало ответственных. С осознания этого факта и надо начинать! <br> <br> В Энергосистеме очень много органов, холдингов и само Министерство Энергетики. К сожалению, опять отмечу – они дублируют обязанности друг друга. <br> <br>  Менеджмент такого рода не должны существовать. Это просто недопустимо. Такой образ управления подвергает риску весь энергосектор.<br><br> <b>Неэффективность – как нормальное!</b> <br><br>Неэффективность существующего количества органов уже доказало мою теорию об ошибочном управлении стратегически важными ресурсами страны. По факту, на сегодняшний день могут быть изданы указы, исходящие из каждого вышеперечисленного органа, и они могут противоречить или дублировать друг друга. Строятся планы относительно энергосистемы, но они никогда не доходят до конца или до логического завершения. Причин всегда уйма, но нет органа, который смог бы контролировать действия и отчёты всех проектов по стране. <br><br><b>Что такое прозрачность?</b> <br><br>Необходимо стремиться к прозрачности системы. Для этого необходимо объединить, упразднить и сократить количество организаций,  а также систематизировать каждую из организаций, где есть: <br><br> &nbsp &nbsp &nbsp 1.	Четкий план работ на определённый период. <br><br> &nbsp &nbsp &nbsp 2.	Прописанные должностные обязанности.<br><br> &nbsp &nbsp &nbsp 3.	Ясный вертикаль менеджмента (кто кому подчиняется).<br><br> &nbsp &nbsp &nbsp 4. Ответственный руководитель, который знает, что и как надо делать. При этом информация о данном руководителе и проектах, которыми он руководит, была доступна каждому жителю. Это необходимо, чтобы не было поиска ответственного за провал того или иного проекта.<br><br> &nbsp &nbsp &nbsp 5.	Официальная служба связи с общественностью, где даётся чёткая информация по каждому из проектов и стадиях развития проектов.<br><br> &nbsp &nbsp &nbsp 6.	Горячая линия во всех цифровых форматах, откуда каждый житель страны может получить актуальную информацию.<br><br> &nbsp &nbsp &nbsp 7. «Открытая доска жалоб и предложений», где каждый житель может оставить своё предложение или жалобу относительно представителя сотрудника энергосферы, сбоев поставки электричества дальних районов страны или любых других моментов. Как мы можем говорить, если не знаем и 90% сложностей нашего народа?<br><br>Только так мы сможем получить адекватную и реальную обратную связь и повысить эффективность всех прилагаемых действий. <br><br> <b> К чему надо стремиться? </b> <br><br> Надо стремиться к оптимизации договорённых обязательств уже существующих частных распределительных компаний перед генерирующей компанией и в её пользу.<br><br> Надо стремиться к контролю обязательств распределительных компаний за соблюдение ими обязательств и изымать лицензии на продажу электричества населению. Эти действия помогут резко сократить количество частных компаний, чья деятельность является довольно сомнительной и не приносящей ни пользу населению, ни прибыли государству. <br><br> <b>Это мои топ-5 целей, которые я берусь воплотить. Это те самые 5 целей, которые помогут нашей республике стать привлекательной к иностранным инвестициям, решить большую часть проблем в энергосфере, а также выйти на внешний рынок!</b>'
                },
            ],
            toFlase: false,
            widthTo: false
        }
    },
    computed:{

    },
    created(){
        window.addEventListener("resize", this.myEventHandler);
    },
    destroyed(){
        window.removeEventListener("resize", this.myEventHandler);
    },
    methods:{
        btnNext(){
            let currLocalBtn = localStorage.getItem('currBtn')
            let toNumber = parseInt(currLocalBtn, 10)
            if(toNumber === this.selectedId){
                this.selectedId += 1
                localStorage.setItem('currBtn', this.selectedId)
                console.log('this.', this.selectedId, toNumber+=1);
                if(this.selectedId === 5){
                    this.noneToBtn = true
                    console.log('asd');
                }else{
                    this.noneToBtn = false
                }
            }else{
                console.log('false');
            }
        },
        pathToHome(){
            this.$router.push({ name: 'Main'})
        },
        myEventHandler(e) {
            let currWidth = e.currentTarget.screen.width
            if ( currWidth > 768){
                this.isActivated = false
            }else{
                this.isActivated = true
            }
        },
        showTab(btn){
            this.selectedId = btn.id
            if(this.selectedId){
                this.isActive = true
            }
            if(btn.id === 5){
                this.noneToBtn = true
            }else{
                this.noneToBtn = false
            }
            localStorage.setItem('currBtn', this.selectedId)
        },
        // toggleClass(btn){
        //     this.toFlase = !this.toFlase
        //     if(this.toFlase === true){
        //         this.selected = btn.id
        //     }else{
        //         this.selected = undefined
        //     }
        // }
    },
    mounted(){
        let currWidth = window.screen.width
        let currIdTabs = document.getElementById('defaultDblock')
        let currIdAccordion = document.getElementById('according')
        if(currWidth > 768){
            currIdTabs.classList.add('active')
            currIdAccordion.classList.remove('active')
        }else{
            currIdTabs.classList.remove('active')
            currIdAccordion.classList.add('active')
        }


        localStorage.setItem('currBtn', this.selectedId)
    }
}
</script>
<style>
.btn-next{
    display: block;
    margin: 30px auto 0;
    cursor: pointer;
    padding: 8px 20px;
    font-size: 16px;
    font-weight: 700;
    border: none;
    border-radius: 6px;
    background: linear-gradient(to right, #f88d12, #e12f52, rgb(241, 13, 59));
    color: #fff;
    background-size: 300%;
    transition: .4s ease-in-out;
}
.btn-next:hover{
    background-size: 100%;
}
.btn-next.notActive{
    display: none;
}
.wrapper-p-content h2{
    text-align: center;
    margin-bottom: 20px;
    background: linear-gradient(to right, #f88d12, #e12f52, rgb(241, 13, 59));
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
}
.wrapper-p-goals__tabs{
    display: none;
}
.wrapper-p-goals__tabs.active{
    display: block;
}
.accordion-mob{
display: none;
    width: 100%;
    padding: 0 15px;
}
.accordion-mob.active{
    display: block;
}
.accordion-mob-list{
    padding: 0;
}
.accordion-mob-item{
    margin-bottom: 20px;
}
.accordion-mob-item__title{
    position: relative;
    color: #000;
    list-style: none;
    width: 72px;
    height: 72px;
    background: linear-gradient(to right, rgb(248, 141, 18), rgb(225, 47, 82), rgb(241, 13, 59), rgb(247, 0, 49), rgb(238, 10, 10));
    background-size: 600%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.4s ease-in-out;
    border-radius: 50%;
    margin-bottom: 20px;
    flex-shrink: 0;
}
.accordion-mob-item__title.active{
    background-size: 100%;
}
.accordion-mob-item__title_whiteBg{
    text-align: center;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 56px;
    height: 56px;
    border-radius: 50%;
}
.accordion-mob-item__title_whiteBg img{
    filter: brightness(0.01);
}
.accordion-mob-item__content{
    display: none;
    opacity: 0;
    color: #000;
    background: #fff;
    transition: 1s ease-in-out;
    padding: 0 15px;
}
.accordion-mob-item__content.active{
    display: block;
    min-height: 100%;
    opacity: 1;
}
.accordion-mob-item__arrow{
    position: absolute;
    transform: translate(-50%, -50%);
    bottom: 0;
    left: 50%;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-top: 20px solid rgb(247, 0, 49);
    border-right: 10px solid transparent;
    transition: 0.4s ease-in-out;
    z-index: -9;
}
.accordion-mob-item__arrow.active{
    bottom: -25px;
}
.accordion-mob-item__title_whiteBg h3{
    transition: 0.4s ease-in-out;
}
.accordion-mob-item__title_whiteBg h3.active{
    background: linear-gradient(to right, #f88d12, #e12f52);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
}
.p-goals__btn-home{
    position: fixed;
    top:20px;
    left: 20px;
    width: 30px;
    opacity: 0.5;
    transition: 0.4s ease-in-out;
    cursor: pointer;
}
circle{
    fill: none;
    stroke: url(#GradientColor);
    stroke-width: 4px;
    stroke-dasharray: 80%;
    stroke-dashoffset: 0;
    animation: btnAnimation 1.5s linear infinite
}
@keyframes btnAnimation {
    0%{
        stroke-dashoffset: 200;
    }
    80%{
        stroke-dashoffset: 9;
    }
    100%{
        stroke-dashoffset: 0;
    }
}
.p-goals__wrapper-imgs{
    position: relative;
}
.p-goals__wrapper-imgs svg{
    position: absolute;
    top: 0;
    left: 0;
}
.p-goals__wrapper-imgs img{
    position: absolute;
    top: 7px;
    left: 7px;
}
.wrapper-accord-btn__content{
    color: #000;
    width: 100%;
}
.wrapper-accord-btn__number{
    position: relative;
    font-size: 20px;
    font-weight: bold;
    padding-bottom: 12px;
    display: block;
    margin-bottom: 10px;
    -webkit-transition: 0.4s ease-in-out;
    transition: 0.4s ease-in-out;
}
.wrapper-accord-btn__number.active{
    background: linear-gradient(to right,rgb(241, 13, 59),rgb(225, 47, 82) , rgb(248, 141, 18));
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
}
.wrapper-accord-btn__text{
    font-size: 18px;
    transition: 0.4s ease-in-out;
}
.wrapper-accord-btn__text.active{
    background: linear-gradient(to right,rgb(241, 13, 59),rgb(225, 47, 82) , rgb(248, 141, 18));
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
}
.wrapper-accord-btn__number .wrap-line{
    content: '';
    width: 26px;
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    background: linear-gradient(to right, #f88d12, #e12f52);
    transition: 0.4s ease-in-out;
}
.wrapper-accord-btn__number .wrap-line.active{
    width: 100%;
}
.wrapper-accord-btns{
    display: flex;
    column-gap: 20px;
    margin-bottom: 10px;
}
</style>
