(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{178:function(a,t,e){"use strict";e.r(t);var r=e(0),s=Object(r.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"content"},[e("h1",{attrs:{id:"приnожение-applicationinstance"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#приnожение-applicationinstance","aria-hidden":"true"}},[a._v("#")]),a._v(" Приложение / ApplicationInstance")]),a._v(" "),e("h2",{attrs:{id:"обработчики-событий"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#обработчики-событий","aria-hidden":"true"}},[a._v("#")]),a._v(" Обработчики событий")]),a._v(" "),e("h3",{attrs:{id:"приначаnеработысистемы"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#приначаnеработысистемы","aria-hidden":"true"}},[a._v("#")]),a._v(" ПриНачалеРаботыСистемы")]),a._v(" "),e("p",[a._v('Запускается при старте сервера. В процедуре должен быть настроен конвейер обработки вызовов с помощью методов "ИспользоватьХ()" (см. ниже)')]),a._v(" "),e("h3",{attrs:{id:"прирегистрацииконтроnnеров"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#прирегистрацииконтроnnеров","aria-hidden":"true"}},[a._v("#")]),a._v(" ПриРегистрацииКонтроллеров")]),a._v(" "),e("p",[a._v("Обработчик вызывается при поиске файлов реализации контроллеров. Позволяет переопределить список загружаемых контроллеров приложения.")]),a._v(" "),e("h4",{attrs:{id:"параметры"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#параметры","aria-hidden":"true"}},[a._v("#")]),a._v(" Параметры")]),a._v(" "),e("ul",[e("li",[e("em",[a._v("ИменаФайлов")]),a._v(" - Массив. Имена файлов, загружаемые, как контроллеры")]),a._v(" "),e("li",[e("em",[a._v("СтандартнаяОбработка")]),a._v(" - Булево. Если установлено в Ложь, то стандартный алгоритм поиска контроллеров выполняться не будет.")])]),a._v(" "),e("h3",{attrs:{id:"прирегистрациикомпонентовпредставnений"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#прирегистрациикомпонентовпредставnений","aria-hidden":"true"}},[a._v("#")]),a._v(" ПриРегистрацииКомпонентовПредставлений")]),a._v(" "),e("p",[a._v("Обработчик вызывается при поиске файлов реализации компонентов представлений. Позволяет переопределить список загружаемых компонентов представлений.")]),a._v(" "),e("h4",{attrs:{id:"параметры-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#параметры-2","aria-hidden":"true"}},[a._v("#")]),a._v(" Параметры")]),a._v(" "),e("ul",[e("li",[e("em",[a._v("ИменаФайлов")]),a._v(" - Массив. Имена файлов, загружаемые, как компоненты представлений")]),a._v(" "),e("li",[e("em",[a._v("СтандартнаяОбработка")]),a._v(" - Булево. Если установлено в Ложь, то стандартный алгоритм поиска компонентов выполняться не будет.")])]),a._v(" "),e("h2",{attrs:{id:"методы"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#методы","aria-hidden":"true"}},[a._v("#")]),a._v(" Методы")]),a._v(" "),e("h3",{attrs:{id:"испоnьзоватьобработчикошибок-useerrorhandler"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#испоnьзоватьобработчикошибок-useerrorhandler","aria-hidden":"true"}},[a._v("#")]),a._v(" ИспользоватьОбработчикОшибок / UseErrorHandler()")]),a._v(" "),e("p",[a._v("Добавляет компонент конвейера, отвечающий за обработку исключений")]),a._v(" "),e("h4",{attrs:{id:"параметры-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#параметры-3","aria-hidden":"true"}},[a._v("#")]),a._v(" Параметры")]),a._v(" "),e("ul",[e("li",[e("em",[a._v("errorRoute")]),a._v(": Маршрут URL, который будет отображаться при возникновении исключения")])]),a._v(" "),e("h3",{attrs:{id:"испоnьзоватьстатическиефайnы-usestaticfiles"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#испоnьзоватьстатическиефайnы-usestaticfiles","aria-hidden":"true"}},[a._v("#")]),a._v(" ИспользоватьСтатическиеФайлы / UseStaticFiles()")]),a._v(" "),e("p",[a._v("Добавляет компонент конвейера, отвечающий за выдачу статического содержимого (картинок, скриптов, стилей и т.п.)")]),a._v(" "),e("h3",{attrs:{id:"испоnьзоватьмаршруты-usemvcroutes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#испоnьзоватьмаршруты-usemvcroutes","aria-hidden":"true"}},[a._v("#")]),a._v(" ИспользоватьМаршруты / UseMvcRoutes()")]),a._v(" "),e("p",[a._v("Добавляет компонент конвейера, отвечающий за обработку MVC-маршрутов, контроллеры и представления. По умолчанию добавляется маршрут /{controller=home}/{action=index}/{id?}. В метод можно передать имя процедуры-обработчика, в которой можно будет перенастроить шаблоны URL.")]),a._v(" "),e("h4",{attrs:{id:"параметры-4"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#параметры-4","aria-hidden":"true"}},[a._v("#")]),a._v(" Параметры")]),a._v(" "),e("ul",[e("li",[e("em",[a._v("handler")]),a._v(": Имя процедуры-обработчика, в которой будет настраиваться маршрутизация.")])]),a._v(" "),e("h3",{attrs:{id:"испоnьзоватьсессии-usesessions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#испоnьзоватьсессии-usesessions","aria-hidden":"true"}},[a._v("#")]),a._v(" ИспользоватьСессии / UseSessions()")]),a._v(" "),e("p",[a._v("Использовать обработчик cookies, отвечающих за клиентские сессии. Позволяет применять http-сессии в контроллерах")]),a._v(" "),e("h3",{attrs:{id:"испоnьзоватьавторизацию-useauthorization"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#испоnьзоватьавторизацию-useauthorization","aria-hidden":"true"}},[a._v("#")]),a._v(" ИспользоватьАвторизацию / UseAuthorization()")]),a._v(" "),e("p",[a._v("Использовать обработчик cookies, отвечающих за клиентскую аутентификацию.")]),a._v(" "),e("h3",{attrs:{id:"испоnьзоватьфоновыезадания-usebackgroundjobs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#испоnьзоватьфоновыезадания-usebackgroundjobs","aria-hidden":"true"}},[a._v("#")]),a._v(" ИспользоватьФоновыеЗадания / UseBackgroundJobs()")]),a._v(" "),e("p",[a._v("Разрешает использование фоновых и регламентных заданий. Запускает сервер обслуживания заданий Hangfire.")])])}],!1,null,null,null);s.options.__file="Приложение.md";t.default=s.exports}}]);