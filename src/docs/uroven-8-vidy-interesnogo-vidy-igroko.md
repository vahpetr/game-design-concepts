# Уровень 8: Виды интересного, виды игроков

![](media/5ec9596e629f26606ab32257ebbbded7.jpg)

Данный пост — перевод восьмой статьи из [курса лекций «Принципы гейм-дизайна»](http://gamedesignconcepts.wordpress.com/) за авторством профессионала и преподавателя [Яна Шрайбера](http://www.gamasutra.com/view/authors/916452/Ian_Schreiber.php). Переводы предыдущих лекций вы можете посмотреть по [ссылке](index.md).

В понедельник мы с вами узнали, что «интересное» на самом деле всего лишь синоним «познавательного» и что погружение игроков в потоковое состояние является источником этого неуловимого «интересного». Сегодня мы копнём глубже и узнаем больше об «интересном», рассмотрев статью ЛеБланка  и его соавторов «Восемь видов интересного» и сравнив её с теорией потокового состояния и другими вещами.

Сейчас у нас уже есть представление о том, _что_ нам интересно, но было бы неплохо узнать ещё и _почему_ оно нам интересно. Что если существуют ещё неизвестные нам виды интересного?

### Объявление

На этих выходных я буду на [Protospiel](http://www.protospiel.org/), поэтому могу с опозданием отвечать на письма или подтверждать аккаунты на форумах. По этой же причине следующий урок, намеченный на понедельник, может немного запоздать, в зависимости от того, в какой форме я буду по возвращении.

### Результаты мини-задания

Вот небольшая подборка ответов на мини-задания с прошлого раза (предложить изменение в правилах, чтобы привнести занимательные решения в викторины типа _Trivial Pursuit_):

— Отвечающий игрок сначала слышит все шесть вопросов на карточке, затем предсказывает, на какое число из них он ответит правильно. Если игрок не переоценил свои возможности, то он получает N очков (где N – количество правильных ответов); в противном случае он не получает ничего. Предположительно, игрок работает на общий счёт игры, а не для того, чтобы передвигаться по доске. Это решение занимательно в том случае, если он не уверен, правилен ли ответ, и он может выбрать уровень риска (основываясь на своей оценке шансов на успех и среднем количестве очков).

— После того, как игрок ответил на все вопросы сектора, он может продолжать отвечать на дополнительные вопросы с карточки или на вопросы дополнительных секторов (или сделать дополнительный ход), но если неправильно ответить хоть на один – можно потерять все заработанные на этом ходу очки. Интересная механика, «испытай свою удачу».

— Вместо того чтобы бросать кость, игрок может попытаться продвинуться вперёд, ответив на вопрос любого «цвета», расположенный в пределах шести клеток от его текущей позиции. Если он проигрывает, он не двигается. Это ещё одна механика риска/вознаграждения: вы рискуете потратить впустую свой ход, в обмен на возможность более точного движения.

— Один раз за тур вы можете заставить кого-то другого ответить за вас на вопрос, после того, как он уже озвучен. Если на него ответили неправильно, очередь возвращается к вам, если ответили правильно – ваш ход завершён. Реминисценция из _You Don’t Know Jack._

— Можно получать больше одного сектора определённого цвета, и меняться с другими игроками в любое время.

— Вы сами читаете себе вопрос. После того, как вы увидите ответ, если вы ответили неправильно, вы можете сблефовать и притвориться, что ваш ответ верен. Если никто не ставит это под сомнение, игра продолжается так, будто ответ и впрямь верен. Если в вас засомневались… Здесь оригинальный твит обрывается, но предположительно, тот, кто оказался прав получит награду, тот, кто был не прав (или разоблачён) потеряет что-то в наказание. Я бы предложил, чтобы тот, кто проигрывает пари, терял право следующего хода, а если оказывается прав игрок, поставивший под сомнение блефовавшего, его очередь наступает немедленно (даже если для этого требуется «перескочить» через очереди других игроков).

### Чтение

Прочтите следующее:

— [_Natural Funativity_](http://www.gamasutra.com/features/20041110/falstein_01.shtml)  Ноа Фальштейна (перевод этой статьи на русский язык можно почитать [здесь](estestvennaya-interesnost.md)). Мы много говорили о том, что такое «интересное», а из структуры [МДЭ](mde-formal_nyy-podhod-k-geym-dizaynu-i.md) мы знаем, что существуют разные виды интересного. Но почему именно эти вещи интересны, а не какие-то другие? Ноа предлагает полезную теорию.

— [_Clubs, Diamonds, Hearts, Spades: Players Who Suit MUDs_](http://www.mud.co.uk/richard/hcds.htm) Ричарда Бартла. Если вы не такие старые, чтобы знать, что такое MUD – это, проще говоря, предшественник MMO. Замените слово MUD на WoW и смысл от этого не поменяется.

— Также вам будет полезно освежить в памяти [структуру МДЭ](http://www.cs.northwestern.edu/~hunicke/MDA.pdf) (перевод — [здесь](mde-formal_nyy-podhod-k-geym-dizaynu-i.md)), а особенно ту часть, где говорится о восьми видах интересного.

### Виды интересного

Наверняка вы помните, что в [«Структуре МДЭ»](mde-formal_nyy-podhod-k-geym-dizaynu-i.md) авторы перечислили восемь видов интересного, а именно:

— **Ощущения.** Игры напрямую говорят с чувствами. Вспомните звук или изысканное видео в компьютерных играх; как приятны на ощупь деревянные дороги и дома в _Settlers of Catan;_ чувство движения в спортивных играх, _Dance Dance Revolution,_ или любой другой игре на _Nintendo Wii._

— **Фантазия.** Игры создают воображаемый мир (кто-то может цинично называть это «эскапизмом»), который интереснее реального мира.

— **Повествование.** Как мы уже отмечали вкратце, в играх есть сюжет, как заложенный – предусмотренный дизайнерами, так и возникающий, создаваемый действиями игрока.

— **Преодоление вызова.** Интерес в некоторых играх, особенно ретро-аркадах, профессиональных видах спорта и соревновательных настольных играх (таких как _шахматы_ или _го_), возникает из сопернического азарта. Даже такие индивидуальные игры, как _Сапёр,_ или занятия вроде скалолазания интересны потому, что мы преодолеваем сложные препятствия.

— **Единение.** Многие игры содержат сильный социальный элемент. Думаю, исключительно поэтому множество американских настольных игр вроде _Монополии_ продолжает продаваться в огромных количествах, несмотря на отсутствие занимательных решений и скучную механику. Люди нежно хранят детские воспоминания о вечерах в семейном кругу, а не о игре, как таковой.

— **Открытие.** Оно редко встречается в настольных играх, только в исследовательских разновидностях вроде _Tikal_ или _Entdecker._ Гораздо чаще открывать что-то можно в приключенческих или ролевых видеоиграх, особенно в сериях _Zelda_ или _Metroid._

— **Выражение.** Я думаю, под этим авторы [МДЭ](mde-formal_nyy-podhod-k-geym-dizaynu-i.md) имели в виду возможность выразить себя в игровом процессе. В пример приводились такие игры, как _Шарады_ и _Покер,_ где поведение игрока, как минимум, также важно, как и другие действия, совершаемые в игре; _Dungeons&Dragons,_ где созданный вами персонаж воплощает ваше личностную проекцию; игры открытого мира и симуляторы, как _The Sims_ или _Grand Theft Auto,_ или _Oblivion,_ или _Fable,_ основная задача которых – дать игроку возможность создать себе любой игровой опыт на выбор.

— **Подчинение.** На этом месте мои студенты частенько хихикают – каждый в меру своей распущенности. Но игры действительно имеют своей целью вовлечь вас в постоянное хобби, а не просто быть отдельным событием. Вспомните мета-игру перед турниром _Magic: the Gathering,_ требования регулярно появляться на собраниях гильдии в _World of Warcraft,_ или даже возведённые в ритуал еженедельные собрания любителей настольных и ролевых игр.

Помните, что здесь не действует принцип «всё или ничего». Игры могут содержать несколько разных видов интересного, в разных пропорциях.

Почему бы не создать игру, которая интересна на все восемь ладов? Не правда ли, это стало бы квинтэссенцией всех игр, игрой, интересной для каждого? К сожалению, нет. То, что существует восемь видов интересного, не значит, что _все восемь_ видов интересны _всем._ Разные игры не только предлагают разнообразные сочетания всевозможных видов интересного в разных пропорциях, дело в том, что разные игроки находят разные сочетания более или менее интересными, чем другие. Примерно половина моих знакомых считает _шахматы_ интересными, а другая половина – не считает; интересная эстетика возникает не из одной лишь игры, но из взаимодействия игры с игроком.

Так что же, эти восемь видов – все существующие виды интересного? Нет, даже сами авторы признают, что приведённый список неполон. Есть много классификаций и схем для того, чтобы идентифицировать разные виды интересного, включая [четыре ключа к интересному](http://www.xeodesign.com/the-4-keys-to-fun/) Николь Лаццаро, или [четырнадцать форм интересного](http://www.gamasutra.com/features/20011012/garneau_01.htm) Пьера-Александра Гамю. Даже перечисленные здесь восемь видов очень спорны. Стоит ли, например, разделять повествование и фантазию, или это два проявления одного и того же вида интересного? Действительно ли подчинение – это интересно? или просто игра бывает такой интересной, что становится хобби – так что здесь причина, а что следствие? Что конкретно можно отнести к «выражению», а что нельзя?

И куда же здесь пристроить всё вот это «интерес – это учение, а учиться интересно» из прошлого занятия?

### Эволюция (без Покемона)

Фальштейн предлагает совершить путешествие в прошлое, в раннюю доисторическую эру, когда люди находились на стадии охотников-собирателей. Первобытным людям необходимо было усвоить множество навыков, чтобы выжить и оставить потомство. Если вам интересно осваивать определённые навыки, вы наверняка станете в них практиковаться, и таким образом, повысите свои шансы на выживание и продолжение рода, и передадите свои гены следующему поколению. Со временем, вещи, которые повышали шансы на выживание, стали тем, что нам интересно. Не все навыки охотника-собирателя _полезны_ в современно мире, но наши гены ещё не поспели за развитием технологий.

Вкратце: **если пещерному человеку что-то было полезно, вам наверняка это будет интересно.**

Фальштейн предлагает три вида интересного:

— «физически интересно» (полезно для всех физических свойств, которые позволяют бороться или избегать опасности);

—  «умственно интересно» (задействует часть нашего мозга, отвечающую за решение проблем и подарившую нам такие полезные вещи, как огонь и колесо)

— «социально интересно» (преимущества того, чтобы собраться гуртом для совместного выживания… ну и размножения, само собой).

Когда я впервые это прочитал, я подумал: «Уоу!», точнее «WoW»…  Ведь что есть  _World of Warcraft,_ если не физический интерес (битва), умственный интерес (оптимизация вашего снаряжения и навыков) и социальный интерес (танцы ночных эльфов)?

Но ведь этот эволюционный подход можно приложить к любому из известных нам «видов интересного». Давайте рассмотрим 8 видов интересного из [МДЭ](mde-formal_nyy-podhod-k-geym-dizaynu-i.md) с этой точки зрения:

— Ощущение включает в себя физические движения (хорошо для развития мускулатуры) и созерцание (слушание) интересных нам вещей (хорошо для умения распознавать возможности и опасности).

— Фантазия позволяет развить ту часть мозга, которая выстраивает возможные сценарии «а что если?..», даёт нам возможность создавать новые идеи.

— Повествование полезно для того, чтобы передавать важную информацию и опыт другим членам группы, повышая шансы того, что _все свои_ выживут.

— Вызов – удобный способ показать своё превосходство над другими относительно безопасным способом –  ведь «Я могу этот камень швырнуть дальше, чем ты» куда полезней, чем «Давай сразимся насмерть», если вы пытаетесь основать колонию.

— Единение открывает возможности новых источников пищи (в одиночку охотясь на крупного зверя легко погибнуть, тогда как вместе мы можем его одолеть). Да и передавать потомству свой генетический материал весьма затруднительно, если вы пребываете в гордом одиночестве.

— Открытие – то, что заставляет нас исследовать близлежащую территорию. Чем больше территории мы изучили, тем больше у нас возможностей найти еду или укрытие.

— Выражение, по-видимому, происходит из той же части нашего мозга, которая заточена под коммуникацию посредством языка. Язык и общение вообще вещи очень полезные.

— Подчинение… ну, здесь я не совсем уверен. Может быть, это действительно следствие интереса, а не его причина.

### Открытие новых видов интересного

Мы можем сделать и наоборот: вместо того, чтобы брать что-то, что нам интересно, и прослеживать это до самой подкорки нашего мозга, можно просто выделить навыки, которые были бы полезны для выживания наших предков и таким образом выяснить, что нам сегодня может показаться интересным. Например, вот некоторые виды деятельности, которые часто встречаются в играх:

— **Коллекционирование.** Это «собирательская» половина охотника-собирателя, так что понятное дело, может быть интересной. Это и есть интересно. Когда я был ребёнком и видеоигры ещё не были широко распространены, самым популярным хобби в мире было коллекционирование марок. Во многих настольных играх вы собираете ресурсы и фишки. Во многих карточных играх люди меняются картами, чтобы собрать нужный «набор». В мире видеоигр собирательство существует с тех пор, как Марио стал собирать монеты.

— **Организация пространства.** Первобытным людям необходимо было упорядочивать пространственные отношения, чтобы создавать полезные инструменты (например, если вам нужна большая палка, чтобы сделать грубую лестницу или мост, вам необходимо уметь оценивать длину, если вам нужно скрепить два куска дерева, надо выяснить, как их повернуть и обработать, чтобы они сложились друг с другом). Множество игр используют пространственные отношения, от _Тетриса_ до _Pente._

_—_ **Развитие.** Мне это видится как мета-навык, навык обучения новым навыкам, который определённо полезен для первобытного человека, которому надо было обучаться множеству различных умений. Мы всё время видим воплощение этого в играх: от очевидных очков опыта и уровней до обнаружения новых предметов и покупки нового оружия, которое даёт лучшие характеристики или новые способности.

— **Поиск лёгких путей.** Умение найти новые, неизведанные пути решения проблем, которые будут легче, чем обычные, помогало первобытным людям беречь энергию; в этом смысле лень может быть достоинством. В играх, как ни прискорбно, этот навык часто приобретает форму преднамеренного нарушения правил и мошенничества.

— **Гриферство.** Как и в других соревновательных видах деятельности, унижение и издёвки используется как средство демонстрации своего превосходства, доминирования над сверстниками (Да, многим из нас это сильно досаждает и кажется ребячеством, но пещерные люди и не славятся особо своей эмоциональной чуткостью).

Возможно, вам придут в голову какие-то другие виды интересного. Пожалуйста, делитесь своими мыслями в комментариях к этому блогу.

### С течением времени игры меняются

Игра вообще, и конкретные игры в частности помогают нам совершенствовать навыки, которые пригодятся во взрослой жизни. И если для того, чтобы изменить наши представления об интересном, требуются миллионы лет эволюции, игры, в которые мы играем, меняются с каждым новым поколением. Несколько столетий тому назад, когда большинство людей были земледельцами, сбор урожая зерновых имел огромное значение для многих. Сейчас это в прошлом, поэтому «игры с зерном» уже не преобладают в современном мире.

Это даёт вам ещё одну отправную точку для начала работы над игрой. Подумайте, какие навыки полезны во взрослой жизни в вашей культуре? Найдите связь между ними и теми навыками, которые были нужны первобытному охотнику-собирателю. А затем придумайте игру, которая этим навыкам обучает. Большинство удачных обучающих игр устроены именно так: обучение интегрировано в механику. Действия в игре либо заключаются в использовании нужного навыка, либо усвоение этого навыка необходимо для победы в игре. И в том, и в другом случае игровой процесс выстроен на присущих обучению интересе и удовольствии, и у вас получается «образовательная» игра, которая интересна и приносит удвольствие. Обратите внимание на резкий контраст с типичными «образвлекательными» играми, где механическая зубрёжка является предварительным условием для игры, а игровой процесс и процесс обучения разделены, что _не интересно,_ сколько бы вы ни пытались.

### Одна проблема

Итак, кажется, теперь у нас есть все ответы. Потоковые состояния приятны. Нами движет глубоко заложенное стремление получить полезные для охотника-собирателя навыки. Игры могут использовать  это стремление, чтобы быть «интересными».

Всё?

Вообще-то, нет.

Во-первых, мы должны разобраться с этой массовой одержимостью «интересным и весёлым». Веселье – не единственная положительная эмоция. Например, дизайнеры часто говорят о:

— **фьеро (итал. “fiero”)**  — гордость за выполнение сложного задания. «Ты крут!»

— **шаденфрюде (нем. “Schadenfreude”) — чувство злорадства, когда твоему сопернику что-то не удаётся. «Трагедия – это когда я на гвоздь наступил, комедия – это когда ты со скалы упал и разбился».**

**— нахес (иврит “נחת”) –** «утешение» — то тёплое чувство радости и собственной значимости, когда ваш ребёнок, ученик или воспитанник чего-то добивается. «Я так тобой горжусь!»

— **квелль (идиш “kveln”)–** «удовлетворение» — эмоция, которую испытываешь, когда хвастаешься своим ребёнком, студентом и так далее. «Мой малыш – лучший ученик своей начальной школы!»

Ни одна из этих эмоций не может быть полностью описана словами «интересно» или «весело». И ни одна из них напрямую не связана с потоковыми состояниями. Но они приятны. И они, безусловно, могут привнести многое в игровой процесс.

Кроме того, как мы уже говорили, когда обсуждали арт-игры, развлечение – это не единственная причина, по которой создаются игры. Мы можем читать, например, _«Войну и мир»_ и говорить, что это хорошая книга, но она не развлекательная. Мы можем сказать, что _«Список Шиндлера»_ и _«Спасение рядового Райана» —_ великие фильмы, но люди посмотрят на нас с непониманием, если мы скажем, что они нас развлекли. _«Макбет»_ — не особенно весёлая вещь. _«Мону Лизу»_ разглядывать тоже не ахти как забавно. Да и выпуск новостей редко бывает весёлым. И всё же, эти вещи много значат для нас.

Если бы _«Мона Лиза»_ была игрой, рецензия на неё выглядела бы так: «Отличная графика, но всего один уровень, низкая интерактивность, игра на один раз. Занятно, но не особо интересно, 2 из 10».

Не думаю, что мы с этим согласились бы.

Итак, предпосылка, с которой я начал в прошлый понедельник – «работа гейм-дизайнера – взять игру и сделать её интересной» – теперь должна вас всех немного смущать. Развлекательный компонент, безусловно, присутствует во множестве игр, и он важен, но одним этим игры не ограничиваются. Наша роль как гейм-дизайнеров больше, чем просто сделать игру интересной. Задача гейм-дизайнера **создать наполненный смыслом игровой опыт.**

И делать это проще всего в развлекательной форме. Но не забывайте –  это не единственный способ.

### Ещё одна проблема

В своей _A Theory of Fun_ Костер подчёркивает, что игроки, в глубине души, ленивы. Они склонны искать игры, похожие на те, в которые уже умеют хорошо играть, поэтому они не учатся новому, а это уменьшает количество удовольствия, которое они могли бы получить от процесса обучения. Они ищут лазейки, читы и баги дизайна, которыми можно воспользоваться – и всё это с большой вероятностью срывает предусмотренный увлекательный процесс обучения. Игроки сами делают игру неинтересной, но они всё равно это делают.

Справедливости ради: гейм-дизайнеры тоже это делают. Пожалуй, мы делаем это куда чаще и больше, чем игроки, ведь у нас такой большой опыт в поиске повторяющихся схем, и мы так быстро их различаем. Это приводит к большому количеству вторичных игр. К примеру, для меня первой игрой стала коллекционная карточная игра, и даже сейчас меня всё время тянет добавить карты, возможность составлять колоду, баланс стоимости и выгоды, а также понятие «редкости» в любую игру, с которой я работаю. Другой дизайнер, с которым я работаю, на всё смотрит сквозь призму ролевых игр. Ещё один мой коллега пытается всё на свете превратить в симулятор. Большинство из нас склонны на всё смотреть с позиции одного жанра, даже если они работают в другом. Мой опыт говорит о том, что зачастую это жанр первой игры, над которой они работали профессионально.

Что заставляет нас предпочитать один вид игр другому? Если это всего лишь «личный вкус», то почему мы так часто встречаем повторяющиеся предпочтения у разных дизайнеров?

### Типы игроков

И здесь мы возвращаемся к Бартлу и его классификации игроков. Точно так же, как и с видами интересного (и определениями игры), нет недостатка в людях, жаждущих выдвинуть свою собственную теорию о типажах игроков. Почему же тогда читать именно Бартла, а не кого-то другого? Во-первых, Бартл первым написал такого рода эссе, пользующееся широким интересом и признанием, поэтому оно важно с исторической точки зрения. Во-вторых, в нём есть некоторые аспекты, которые интересно было бы проанализировать.

Давайте рассмотрим четыре предложенных типа игроков в MUD (или MMO):

— **Целеустремлённые:** получают удовольствие от обретения силы, власти, достижения нового уровня, и вообще любят «побеждать» (насколько вообще можно победить в игре, у которой нет конца).

— **Исследователи:** любят исследовать мир, рисовать воображаемые карты разных земель в своем сознании и вообще разбираться в том, что их окружает.

— **Общительные:** используют игру как социальную среду. Они играют для того, чтобы общаться с другими игроками. Системы игрового процесса – всего лишь удобный предлог для того, чтобы собраться и поиграть с друзьями.

— **Убийцы** (сегодня мы называем их гриферами) – находят удовольствие в том, чтобы испортить настроение другим.

Какова мотивация каждого из этих типов? Зачем они делают то, что делают? А это возвращает нас к видам интересного.

Если мы сравним список игровых типов Бартла с восемью видами интересного из [МДЭ](mde-formal_nyy-podhod-k-geym-dizaynu-i.md), вы увидим параллели. Целеустремлённым нравится преодоление вызова. Исследователям нравятся открытия. Общительным по душе единение. А убийцы… ну что ж, хоть они и не вписываются в какой-то конкретный тип интересного в классификации [МДЭ](mde-formal_nyy-podhod-k-geym-dizaynu-i.md), гриферство, которое я предложил в качестве дополнения, как раз отлично подходит.

Другие классификации игровых типов демонстрируют всё те же соответствия: каждый «типаж» на самом деле представляет собой вид интересного, или сочетание разных типов интересного.  Гоночные игры сочетают ощущения и преодоление; я бы мог предложить новый тип игрока – «гонщик», которому нравятся такие игры. А потом мог бы предположить, что другие игры, вроде «Xtreme Sports» могут привлечь этот тип игроков, потому что в них есть похожее сочетание видов интересного.

Можно пойти и другим путём. Если вам удаётся выделить новый тип игрока (то есть модель игрового поведения, которую демонстрирует значительный процент ваших тестеров), то изучив этот тип и его действия, вы сможете открыть новые типы интересного.

### Так что же сначала?

Если мы всё время мечемся от игроков к видам интересного и обратно, то, может быть, это классическая проблема курицы и яйца? С чего же лучше начать, с игроков или с интересного?

Подумайте вот о чём: будучи гейм-дизайнерами мы создаём правила (механику). Когда правила начинают работать, они создают динамику, а она вызывает эстетику интересного у игроков. То, что мы создаём – корень и первопричина интересного. Следовательно, для нас важнее _виды интересного._

Мы не создаём игроков. Хотя те из вас, у кого уже есть дети, могут не согласиться. Но вы меня поняли. Мы, как дизайнеры, не создаём своими правилами ни новых игроков, ни новые типажи. Следовательно, любой список игровых типажей полезен для нас только в том случае, если эти типажи соотносятся с видами интересного.

Давайте я приведу пример. Есть книга _21st Century Game Design,_ написанная Крисом Бейтманом и Ричардом Буном, она предлагает классификацию игроков, основанную на [типологии личности](https://ru.wikipedia.org/wiki/%D0%A2%D0%B8%D0%BF%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%8F_%D0%9C%D0%B0%D0%B9%D0%B5%D1%80%D1%81_%E2%80%94_%D0%91%D1%80%D0%B8%D0%B3%D0%B3%D1%81) Майерс-Бриггс. Основная идея в том, чтобы проводить исследования рынка, знать, для каких игроков вы создаёте игры, и делать их такими, чтобы они подходили целевой аудитории – эта идея определённо находит применение в гейм-дизайне. Но вот воплощена она спорно. Типология Майерс-Бриггс перенесена на типы игроков, которые в свою очередь соответствуют видам интересного. Здесь целых два уровня абстракции, а это значит, погрешность будет выше, чем обычно. В конце концов, не все люди аккуратно распределяются по шестнадцати категориям.

Более избитый пример с разделением игроков на «случайных» и «хардкорных». Что ж, такое различие может быть полезным для маркетологов, но не очень поможет дизайнерам. Какой вид интересного соответствует этим игрокам? Что такое «случайный интерес» и «хардкорный интерес»? Непонятно. Нам говорят, что случайные игроки хотят быстрой, лёгкой, не слишком трудной игры. Несмотря на это, многие так называемые «казуальные игры» трудны _(Diner Dash),_ продолжительны (_Puzzle Quest_), или сложны (_Virtual Villagers_). Вместо того чтобы тратить время на поиски единственного архетипа «случайного игрока», на мой взгляд, было бы полезней выделить те виды интересного, которые позволяют так называемой «казуальной игре» быть успешной, и уже отсюда плясать.

### Памятка учителям

Как и в прошлый раз, имеется пара прямых параллелей с преподаванием. Где я говорю «типы игроков» или «виды интересного», преподаватель может думать о «стилях обучения». То, что я называю ощущением, повествованием и выражением, вы можете определить как аудио-, визуальное и кинестетическое обучение.

Попробуйте представить, как это можно применить в классе:

— Сколько видов интересного вы используете в классе? Используете ли вы разные его виды, чтобы дать всем студентам возможность включаться в процесс и заинтересовываться хотя бы иногда?

— Удовольствие от ощущений – вещь совершенно несложная. Приносите в класс вещи, на которые интересно смотреть. Приносите наглядные пособия, которые можно потрогать и передать по классу. Одна моя знакомая учительница заставляет весь класс встать и потянуться, если она видит, как они начинают клевать носом.

— Повествование – это тоже просто. Большинство предметов заключают в себе сюжеты и истории. Многим людям гораздо легче запомнить историю, чем набор разрозненных фактов. Мы заточены под то, чтобы слушать и рассказывать истории.

— Преодоление вызова часто можно устроить в форме викторин прямо в классе. Но хотя _Jeopardy!_ в разы интереснее среднестатистического урока в старшей школе, всё же, не забывайте, что в викторинах ученики не принимают никаких занимательных решений. Ведь можно сделать ещё лучше. Формальные и неформальные дебаты и дискуссии, где ученики принимают какую-либо из сторон, тоже подходят для этого вида интереса.

— Единение может происходить, если ученики работают в группах или во время обсуждений.

— Открытие – вещь, сложно реализуемая в большинстве классов, так как все сидят на своих местах, и побродить не удаётся. Походы – очевидный выход из ситуации. Ещё, если в вашем классе есть доступ в интернет, вы можете попросить своих учеников поискать информацию в сети, так они будут исследовать, хотя бы, виртуальное пространство.

— Коллекционирование чаще всего можно встретить в начальной школе, где ученики получают наклейки и золотые звёздочки за успехи. Это несколько рискованно в старших классах, ваши выпускники могут подумать, что вы относитесь к ним, как к детсадовцам, но всё же, это возможно. Я знаю профессора экономики, который напечатал кучу долларовых банкнот со своим портретом и раздавал их ученикам во время всяких викторин, упражнений и тому подобного. В конце семестра ученики могли обменять их на настоящие деньги, призы и так далее.

— Развитие и продвижение вперёд вообще свойственно любому предмету, где последующий материал строится на базе изученного ранее. Если вы нарисуете график навыков, которые осваиваются в классе (со стрелками, ведущими от предварительно необходимых навыков к новым, которые нужно усвоить), то вы заметите, как сильно он напоминает технологическое древо (или древо навыков) в RTS или  MMO. Показав этот график своим ученикам (и впоследствии демонстрируя им каждый раз, когда они «разблокируют» доступ к новым, более продвинутым умениям) можно создать чувство достижения. А ещё так проще продемонстрировать связь между темами. Между прочим, можете сделать такой график и для всяких завучей, изобразив всю свою программу и наглядно продемонстрировав требования курса.

### Чему мы научились

В общем, всё, что нам кажется интересным, так или иначе связано с навыками наших далёких предков, которые требовались им для выживания. Мы можем использовать это в своих играх, чтобы сделать их интереснее.

Некоторые люди находят одни виды интересного привлекательнее других. Вкусы разные. Попробуйте проанализировать свои любимые игры (а также популярные игры, которые _вам не_ _нравятся_) и посмотрите, получится ли у вас обнаружить свою личную «модель интереса».

Помните, что интерес – лишь одна из многих эмоций, которые игра вызывает у игрока. Наша цель как гейм-дизайнеров – обеспечить захватывающий опыт, который может быть или не быть развлекательным. Большинство арт-игр из Уровня 6 не были особенно забавными… но они обладали глубоким смыслом. Развлекательность – это важный аспект того, чем мы занимаемся, но не стоит ради неё жертвовать всем остальным.

Если вы поищете самостоятельно, вы обязательно найдёте много статей, которые пытаются классифицировать виды интересного или игроков по типам. Не воспринимайте каждую такую статью как откровение. Вместо этого, проанализируйте и посмотрите, насколько она логична. Подумайте над предложенными видами интересного: _почему_ нам (или нашим предкам, охотниками и собирателям) это могло бы быть интересно? Попробуйте связать типы игроков с видами интересного, раз гейм-дизайнеру проще создавать новый коктейль из разных видов интересного, чем новый тип игрока.

### Обратная связь

Если у вас есть время, перед тем, как приступить к сегодняшней домашней забаве, пожалуйста, уделите несколько минут и предложите **конструктивный отзыв** на, как минимум две публикации своего уровня по заданию об игре «Война» из Уровня 7 (опубликованные на [форуме](http://ww2.gamedesignconcepts.aceboard.com/)), а также три других публикации из уровня ниже вашего (если у вас не зелёный круг).

Постарайтесь закончить ваши отзывы до полудня понедельника, 27 июля.

### Домашняя забава

Давайте попрактикуемся в поисках механики, которая возбуждает определённый вид интереса. А рассматривать мы будем **гриферство** (то есть, получение удовольствия от того, что ты портишь его другим).

Создайте идею игры, которая специально построена так, чтобы привлечь гриферов (то есть тип «убийцы» из классификации Бартла). Разместите на форуме. **Вам не надо создавать правил для этой игры.** Просто концепт, который содержит информацию достаточную для того, чтобы представить себе игровой процесс.

Ваша публикация должна содержать следующее:

— Для какой среды, для какой платформы. Игра для ПК? Для консоли? Настольная, карточная? Ролевая?

— Число игроков

— Один-два параграфа с описанием вашей идеи

— Ещё один параграф, описывающий, почему этот концепт заинтересует целевую аудиторию.

Поместите на форуме, который больше всего подходит по описанию к вашим навыкам и опыту в области дизайна:

![001](media/27b5f6aafd5bea8052d09c2dafc997d8.png)Начинающий, мало или совсем нет опыта дизайна до этого курса.

![002](media/a39f810fb5a0e08b098d57e632bd158e.png)Средний, исполнение заданий в ходе курса и небольшой опыт гейм-дизайна, но мало или совсем нет опыта профессионального дизайна.

[![003](media/efe26415e6ae389c136bc8a358341b13.png)](media/83b1b6c3b75e4adbb75004ddf6813adc.png)Продвинутый, по крайней мере, небольшой опыт профессионального дизайна (есть изданные работы).

Опубликуйте свою запись до полудня понедельника, 27 июля. Затем **сделайте конструктивный отзыв** на, по крайней мере, два других поста с того же форума и, как минимум, три поста уровнем «ниже» вашего, если вы разместили свой в «синем квадрате» или «чёрном ромбе» до четверга, 30 июля.

### Мини-задание

Можете ли вы назвать какой-то новый вид интересного? Опишите и докажите, что это интересно, уложившись в 135 знаков или меньше. Разместите в твиттера с тэгом #GDCU. Предлагайте столько, сколько вам придёт в голову. Постите твиты до полудня 27 июля.

_Перевод — Ю. Сергеева_