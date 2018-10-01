(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{191:function(a,r,t){"use strict";t.r(r);var e=t(0),s=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var a=this,r=a.$createElement,t=a._self._c||r;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"процедуры-и-функции-взаимодействия-с-системой"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#процедуры-и-функции-взаимодействия-с-системой","aria-hidden":"true"}},[a._v("#")]),a._v(" Процедуры и функции взаимодействия с системой")]),a._v(" "),t("p",[a._v("Глобальный контекст. Представляет глобально доступные свойства и методы.")]),a._v(" "),t("h2",{attrs:{id:"свойства"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#свойства","aria-hidden":"true"}},[a._v("#")]),a._v(" Свойства")]),a._v(" "),t("h3",{attrs:{id:"файnовыепотоки-filestreams"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#файnовыепотоки-filestreams","aria-hidden":"true"}},[a._v("#")]),a._v(" ФайловыеПотоки / FileStreams")]),a._v(" "),t("p",[a._v("Доступ: Чтение")]),a._v(" "),t("p",[a._v("Менеджер файловых потоков.")]),a._v(" "),t("h3",{attrs:{id:"симвоnы-chars"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#симвоnы-chars","aria-hidden":"true"}},[a._v("#")]),a._v(" Символы / Chars")]),a._v(" "),t("p",[a._v("Доступ: Чтение")]),a._v(" "),t("p",[a._v("Содержит набор системных символов.")]),a._v(" "),t("h2",{attrs:{id:"методы"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#методы","aria-hidden":"true"}},[a._v("#")]),a._v(" Методы")]),a._v(" "),t("h3",{attrs:{id:"сообщить-message"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#сообщить-message","aria-hidden":"true"}},[a._v("#")]),a._v(" Сообщить / Message()")]),a._v(" "),t("p",[a._v("Выдает сообщение в консоль.")]),a._v(" "),t("h4",{attrs:{id:"параметры"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#параметры","aria-hidden":"true"}},[a._v("#")]),a._v(" Параметры")]),a._v(" "),t("ul",[t("li",[t("p",[t("em",[a._v("message")]),a._v(": Выдаваемое сообщение.")])]),a._v(" "),t("li",[t("p",[t("em",[a._v("status")]),a._v(": Статус сообщения. В зависимости от статуса изменяется цвет вывода сообщения.")])])]),a._v(" "),t("h3",{attrs:{id:"подкnючитьсценарий-attachscript"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#подкnючитьсценарий-attachscript","aria-hidden":"true"}},[a._v("#")]),a._v(" ПодключитьСценарий / AttachScript()")]),a._v(" "),t("p",[a._v("Подключает сторонний файл сценария к текущей системе типов.\nПодключенный сценарий выступает, как самостоятельный класс, создаваемый оператором Новый")]),a._v(" "),t("h4",{attrs:{id:"пример"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#пример","aria-hidden":"true"}},[a._v("#")]),a._v(" Пример:")]),a._v(" "),t("pre",[t("code",[a._v('ПодключитьСценарий("C:\\file.os", "МойОбъект");\nА = Новый МойОбъект();\n')])]),a._v(" "),t("h4",{attrs:{id:"параметры-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#параметры-2","aria-hidden":"true"}},[a._v("#")]),a._v(" Параметры")]),a._v(" "),t("ul",[t("li",[t("p",[t("em",[a._v("path")]),a._v(": Путь к подключаемому сценарию")])]),a._v(" "),t("li",[t("p",[t("em",[a._v("typeName")]),a._v(": Имя типа, которое будет иметь новый класс. Экземпляры класса создаются оператором Новый.")])])]),a._v(" "),t("h3",{attrs:{id:"загрузитьсценарийизстроки-loadscriptfromstring"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#загрузитьсценарийизстроки-loadscriptfromstring","aria-hidden":"true"}},[a._v("#")]),a._v(" ЗагрузитьСценарийИзСтроки / LoadScriptFromString()")]),a._v(" "),t("p",[a._v("Создает экземпляр объекта на основании стороннего файла сценария.\nЗагруженный сценарий возвращается, как самостоятельный объект.\nЭкспортные свойства и методы скрипта доступны для вызова.")]),a._v(" "),t("h4",{attrs:{id:"пример-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#пример-2","aria-hidden":"true"}},[a._v("#")]),a._v(" Пример:")]),a._v(" "),t("pre",[t("code",[a._v('Контекст = Новый Структура("ЧислоПи", 3.1415); // 4 знака хватит всем\nЗагрузитьСценарийИзСтроки("Сообщить(ЧислоПи);", Контекст);\n')])]),a._v(" "),t("h4",{attrs:{id:"параметры-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#параметры-3","aria-hidden":"true"}},[a._v("#")]),a._v(" Параметры")]),a._v(" "),t("ul",[t("li",[t("p",[t("em",[a._v("code")]),a._v(": Текст сценария")])]),a._v(" "),t("li",[t("p",[t("em",[a._v("externalContext")]),a._v(": Структура. Глобальные свойства, которые будут инжектированы в область видимости загружаемого скрипта. (Необязательный)")])])]),a._v(" "),t("h3",{attrs:{id:"загрузитьсценарий-loadscript"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#загрузитьсценарий-loadscript","aria-hidden":"true"}},[a._v("#")]),a._v(" ЗагрузитьСценарий / LoadScript()")]),a._v(" "),t("p",[a._v("Создает экземпляр объекта на основании стороннего файла сценария.\nЗагруженный сценарий возвращается, как самостоятельный объект.\nЭкспортные свойства и методы скрипта доступны для вызова.")]),a._v(" "),t("h4",{attrs:{id:"пример-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#пример-3","aria-hidden":"true"}},[a._v("#")]),a._v(" Пример:")]),a._v(" "),t("pre",[t("code",[a._v('Контекст = Новый Структура("ЧислоПи", 3.1415); // 4 знака хватит\n// В коде скрипта somescript.os будет доступна глобальная переменная "ЧислоПи"\nОбъект = ЗагрузитьСценарий("somescript.os", Контекст);\n')])]),a._v(" "),t("h4",{attrs:{id:"параметры-4"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#параметры-4","aria-hidden":"true"}},[a._v("#")]),a._v(" Параметры")]),a._v(" "),t("ul",[t("li",[t("p",[t("em",[a._v("path")]),a._v(": Путь к подключаемому сценарию")])]),a._v(" "),t("li",[t("p",[t("em",[a._v("externalContext")]),a._v(": Структура. Глобальные свойства, которые будут инжектированы в область видимости загружаемого скрипта. (Необязательный)")])])]),a._v(" "),t("h3",{attrs:{id:"подкnючитьвнешнююкомпоненту-attachaddin"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#подкnючитьвнешнююкомпоненту-attachaddin","aria-hidden":"true"}},[a._v("#")]),a._v(" ПодключитьВнешнююКомпоненту / AttachAddIn()")]),a._v(" "),t("p",[a._v("Подключает внешнюю сборку среды .NET (*.dll) и регистрирует классы 1Script, объявленные в этой сборке.\nПубличные классы, отмеченные в dll атрибутом ContextClass, будут импортированы аналогично встроенным классам 1Script.\nЗагружаемая сборка должна ссылаться на сборку ScriptEngine.dll")]),a._v(" "),t("h4",{attrs:{id:"пример-4"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#пример-4","aria-hidden":"true"}},[a._v("#")]),a._v(" Пример:")]),a._v(" "),t("pre",[t("code",[a._v('ПодключитьВнешнююКомпоненту("C:\\MyAssembly.dll");\nКлассИзКомпоненты = Новый КлассИзКомпоненты(); // тип объявлен внутри компоненты\n')])]),a._v(" "),t("h4",{attrs:{id:"параметры-5"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#параметры-5","aria-hidden":"true"}},[a._v("#")]),a._v(" Параметры")]),a._v(" "),t("ul",[t("li",[t("em",[a._v("dllPath")]),a._v(": Путь к внешней компоненте")])]),a._v(" "),t("h3",{attrs:{id:"стартовыйсценарий-entryscript"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#стартовыйсценарий-entryscript","aria-hidden":"true"}},[a._v("#")]),a._v(" СтартовыйСценарий / EntryScript()")]),a._v(" "),t("p",[a._v("Возвращает информацию о сценарии, который был точкой входа в программу.\nМожно выделить два вида сценариев: те, которые были подключены, как классы и те, которые запущены непосредственно. Метод СтартовыйСценарий возвращает информацию о сценарии, запущенном непосредственно.\nДля получения информации о текущем выполняемом сценарии см. метод ТекущийСценарий()")]),a._v(" "),t("h4",{attrs:{id:"возвращаемое-значение"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#возвращаемое-значение","aria-hidden":"true"}},[a._v("#")]),a._v(" Возвращаемое значение")]),a._v(" "),t("p",[a._v("Объект ИнформацияОСценарии")]),a._v(" "),t("h3",{attrs:{id:"приостановить-sleep"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#приостановить-sleep","aria-hidden":"true"}},[a._v("#")]),a._v(" Приостановить / Sleep()")]),a._v(" "),t("p",[a._v("Приостанавливает выполнение скрипта.")]),a._v(" "),t("h4",{attrs:{id:"параметры-6"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#параметры-6","aria-hidden":"true"}},[a._v("#")]),a._v(" Параметры")]),a._v(" "),t("ul",[t("li",[t("em",[a._v("delay")]),a._v(": Время приостановки в миллисекундах")])]),a._v(" "),t("h3",{attrs:{id:"освободитьобъект-freeobject"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#освободитьобъект-freeobject","aria-hidden":"true"}},[a._v("#")]),a._v(" ОсвободитьОбъект / FreeObject()")]),a._v(" "),t("p",[a._v("Явное освобождение ресурса через интерфейс IDisposable среды CLR.")]),a._v(" "),t("p",[a._v("OneScript не выполняет подсчет ссылок на объекты, а полагается на сборщик мусора CLR.\nЭто значит, что объекты автоматически не освобождаются при выходе из области видимости.")]),a._v(" "),t("p",[a._v("Метод ОсвободитьОбъект можно использовать для детерминированного освобождения ресурсов. Если объект поддерживает интерфейс IDisposable, то данный метод вызовет Dispose у данного объекта.")]),a._v(" "),t("p",[a._v("Как правило, интерфейс IDisposable реализуется различными ресурсами (файлами, соединениями с ИБ и т.п.)")]),a._v(" "),t("h4",{attrs:{id:"параметры-7"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#параметры-7","aria-hidden":"true"}},[a._v("#")]),a._v(" Параметры")]),a._v(" "),t("ul",[t("li",[t("em",[a._v("obj")]),a._v(": Объект, ресурсы которого требуется освободить.")])]),a._v(" "),t("h3",{attrs:{id:"выпоnнитьсборкумусора-rungarbagecollection"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#выпоnнитьсборкумусора-rungarbagecollection","aria-hidden":"true"}},[a._v("#")]),a._v(" ВыполнитьСборкуМусора / RunGarbageCollection()")]),a._v(" "),t("p",[a._v("OneScript не выполняет подсчет ссылок на объекты, а полагается на сборщик мусора CLR.\nЭто значит, что объекты автоматически не освобождаются при выходе из области видимости.")]),a._v(" "),t("p",[a._v("С помощью данного метода можно запустить принудительную сборку мусора среды CLR.\nДанные метод следует использовать обдуманно, поскольку вызов данного метода не гарантирует освобождение всех объектов.\nЛокальные переменные, например, до завершения текущего метода очищены не будут,\nпоскольку до завершения текущего метода CLR будет видеть, что они используются движком 1Script.")]),a._v(" "),t("h3",{attrs:{id:"запуститьприnожение-runapp"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#запуститьприnожение-runapp","aria-hidden":"true"}},[a._v("#")]),a._v(" ЗапуститьПриложение / RunApp()")]),a._v(" "),t("p",[a._v("Запуск приложения в операционной системе")]),a._v(" "),t("h4",{attrs:{id:"параметры-8"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#параметры-8","aria-hidden":"true"}},[a._v("#")]),a._v(" Параметры")]),a._v(" "),t("ul",[t("li",[t("p",[t("em",[a._v("cmdLine")]),a._v(": Командная строка запуска")])]),a._v(" "),t("li",[t("p",[t("em",[a._v("currentDir")]),a._v(": Текущая директория запускаемого процесса (необязательно)")])]),a._v(" "),t("li",[t("p",[t("em",[a._v("wait")]),a._v(": Ожидать завершения (необязательно) по умолчанию Ложь")])]),a._v(" "),t("li",[t("p",[t("em",[a._v("retCode")]),a._v(": Выходной параметр. Код возврата процесса. Имеет смысл только если указан параметр wait=true")])])]),a._v(" "),t("h3",{attrs:{id:"создатьпроцесс-createprocess"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#создатьпроцесс-createprocess","aria-hidden":"true"}},[a._v("#")]),a._v(" СоздатьПроцесс / CreateProcess()")]),a._v(" "),t("p",[a._v("Создает процесс, которым можно манипулировать из скрипта")]),a._v(" "),t("h4",{attrs:{id:"параметры-9"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#параметры-9","aria-hidden":"true"}},[a._v("#")]),a._v(" Параметры")]),a._v(" "),t("ul",[t("li",[t("p",[t("em",[a._v("cmdLine")]),a._v(": Командная строка запуска")])]),a._v(" "),t("li",[t("p",[t("em",[a._v("currentDir")]),a._v(": Текущая директория запускаемого процесса (необязательно)")])]),a._v(" "),t("li",[t("p",[t("em",[a._v("redirectOutput")]),a._v(": Перехватывать стандартные потоки stdout и stderr")])]),a._v(" "),t("li",[t("p",[t("em",[a._v("redirectInput")]),a._v(": Перехватывать стандартный поток stdin")])]),a._v(" "),t("li",[t("p",[t("em",[a._v("encoding")]),a._v(": Кодировка стандартных потоков вывода и ошибок")])]),a._v(" "),t("li",[t("p",[t("em",[a._v("env")]),a._v(": Соответствие, где установлены значения переменных среды")])])]),a._v(" "),t("h3",{attrs:{id:"найтипроцесспоидентификатору-findprocessbyid"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#найтипроцесспоидентификатору-findprocessbyid","aria-hidden":"true"}},[a._v("#")]),a._v(" НайтиПроцессПоИдентификатору / FindProcessById()")]),a._v(" "),t("p",[a._v("Выполняет поиск процесса по PID среди запущенных в операционной системе")]),a._v(" "),t("h4",{attrs:{id:"параметры-10"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#параметры-10","aria-hidden":"true"}},[a._v("#")]),a._v(" Параметры")]),a._v(" "),t("ul",[t("li",[t("em",[a._v("PID")]),a._v(": Идентификатор процесса")])]),a._v(" "),t("h4",{attrs:{id:"возвращаемое-значение-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#возвращаемое-значение-2","aria-hidden":"true"}},[a._v("#")]),a._v(" Возвращаемое значение")]),a._v(" "),t("p",[a._v("Процесс. Если не найден - Неопределено")]),a._v(" "),t("h3",{attrs:{id:"найтипроцессыпоимени-findprocessesbyname"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#найтипроцессыпоимени-findprocessesbyname","aria-hidden":"true"}},[a._v("#")]),a._v(" НайтиПроцессыПоИмени / FindProcessesByName()")]),a._v(" "),t("p",[a._v("Выполняет поиск процессов с определенным именем")]),a._v(" "),t("h4",{attrs:{id:"параметры-11"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#параметры-11","aria-hidden":"true"}},[a._v("#")]),a._v(" Параметры")]),a._v(" "),t("ul",[t("li",[t("em",[a._v("name")]),a._v(": Имя процесса")])]),a._v(" "),t("h4",{attrs:{id:"возвращаемое-значение-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#возвращаемое-значение-3","aria-hidden":"true"}},[a._v("#")]),a._v(" Возвращаемое значение")]),a._v(" "),t("p",[a._v("Массив объектов Процесс.")]),a._v(" "),t("h3",{attrs:{id:"катаnогпрограммы-programdirectory"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#катаnогпрограммы-programdirectory","aria-hidden":"true"}},[a._v("#")]),a._v(" КаталогПрограммы / ProgramDirectory()")]),a._v(" "),t("p",[a._v("Каталог исполняемых файлов OneScript")]),a._v(" "),t("h4",{attrs:{id:"возвращаемое-значение-4"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#возвращаемое-значение-4","aria-hidden":"true"}},[a._v("#")]),a._v(" Возвращаемое значение")]),a._v(" "),t("h3",{attrs:{id:"краткоепредставnениеошибки-brieferrordescription"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#краткоепредставnениеошибки-brieferrordescription","aria-hidden":"true"}},[a._v("#")]),a._v(" КраткоеПредставлениеОшибки / BriefErrorDescription()")]),a._v(" "),t("h3",{attrs:{id:"подробноепредставnениеошибки-detailerrordescription"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#подробноепредставnениеошибки-detailerrordescription","aria-hidden":"true"}},[a._v("#")]),a._v(" ПодробноеПредставлениеОшибки / DetailErrorDescription()")]),a._v(" "),t("h3",{attrs:{id:"текущаядата-currentdate"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#текущаядата-currentdate","aria-hidden":"true"}},[a._v("#")]),a._v(" ТекущаяДата / CurrentDate()")]),a._v(" "),t("p",[a._v("Текущая дата машины")]),a._v(" "),t("h4",{attrs:{id:"возвращаемое-значение-5"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#возвращаемое-значение-5","aria-hidden":"true"}},[a._v("#")]),a._v(" Возвращаемое значение")]),a._v(" "),t("p",[a._v("Дата")]),a._v(" "),t("h3",{attrs:{id:"текущаяуниверсаnьнаядатавмиnnисекундах-currentuniversaldateinmilliseconds"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#текущаяуниверсаnьнаядатавмиnnисекундах-currentuniversaldateinmilliseconds","aria-hidden":"true"}},[a._v("#")]),a._v(" ТекущаяУниверсальнаяДатаВМиллисекундах / CurrentUniversalDateInMilliseconds()")]),a._v(" "),t("h3",{attrs:{id:"значениезапоnнено-valueisfilled"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#значениезапоnнено-valueisfilled","aria-hidden":"true"}},[a._v("#")]),a._v(" ЗначениеЗаполнено / ValueIsFilled()")]),a._v(" "),t("p",[a._v("Проверяет заполненность значения по принципу, заложенному в 1С:Предприятии")]),a._v(" "),t("h4",{attrs:{id:"параметры-12"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#параметры-12","aria-hidden":"true"}},[a._v("#")]),a._v(" Параметры")]),a._v(" "),t("ul",[t("li",[t("em",[a._v("inValue")]),a._v(":")])]),a._v(" "),t("h4",{attrs:{id:"возвращаемое-значение-6"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#возвращаемое-значение-6","aria-hidden":"true"}},[a._v("#")]),a._v(" Возвращаемое значение")]),a._v(" "),t("h3",{attrs:{id:"isvaluefilled-isvaluefilled"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#isvaluefilled-isvaluefilled","aria-hidden":"true"}},[a._v("#")]),a._v(" IsValueFilled / IsValueFilled()")]),a._v(" "),t("h3",{attrs:{id:"запоnнитьзначениясвойств-fillpropertyvalues"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#запоnнитьзначениясвойств-fillpropertyvalues","aria-hidden":"true"}},[a._v("#")]),a._v(" ЗаполнитьЗначенияСвойств / FillPropertyValues()")]),a._v(" "),t("p",[a._v("Заполняет одноименные значения свойств одного объекта из другого")]),a._v(" "),t("h4",{attrs:{id:"параметры-13"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#параметры-13","aria-hidden":"true"}},[a._v("#")]),a._v(" Параметры")]),a._v(" "),t("ul",[t("li",[t("p",[t("em",[a._v("acceptor")]),a._v(": Объект-приемник")])]),a._v(" "),t("li",[t("p",[t("em",[a._v("source")]),a._v(": Объект-источник")])]),a._v(" "),t("li",[t("p",[t("em",[a._v("filledProperties")]),a._v(": Заполняемые свойства (строка, через запятую)")])]),a._v(" "),t("li",[t("p",[t("em",[a._v("ignoredProperties")]),a._v(": Игнорируемые свойства (строка, через запятую)")])])])])}],!1,null,null,null);s.options.__file="Глобальный контекст.md";r.default=s.exports}}]);