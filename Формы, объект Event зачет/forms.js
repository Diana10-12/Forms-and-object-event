//////////////////////////ФОРМЫ//////////////////////////

// 274.1 Дан текстареа и абзац. По потери фокуса в текстареа запишите его текст в абзац.
// let elem = document.querySelector('#elem');
// let p = document.querySelector('p');
// elem.addEventListener('blur', function(){
//     p.innerHTML = elem.value ;
// })

// 275.1 Дан инпут и кнопка. По нажатию на кнопку заблокируйте инпут.
// let elem = document.querySelector('#elem');
// let button = document.querySelector('button');
// button.addEventListener('click', function(){
//     elem.disabled = true;
// })

// 275.2 Дан инпут и две кнопки. Пусть нажатие на первую кнопку блокирует инпут, а нажатие на вторую - отблокирует.
// let elem = document.querySelector('#elem');
// let but1 = document.querySelector('#but1');
// let but2 = document.querySelector('#but2');
// but1.addEventListener('click', function(){
//     elem.disabled = true;
// })
// but2.addEventListener('click', function(){
//     elem.disabled = false;
// })

// 275.3 Дан инпут и кнопка. По нажатию на кнопку узнайте, заблокирован инпут или нет.
// let elem = document.querySelector('#elem');
// let button = document.querySelector('button');
// button.addEventListener('click', function(){
//     console.log(elem.disabled);
// })

// 276.1Дан чекбокс и две кнопки. По нажатию на первую кнопку установите чекбокс в отмеченное состояние, а по нажатию на вторую - в неотмеченное.
// let elem = document.querySelector('#elem');
// let but1 = document.querySelector('#but1');
// let but2 = document.querySelector('#but2');
// but1.addEventListener('click', function(){
//     elem.checked = true
// })
// but2.addEventListener('click', function(){
//     elem.checked = false
// })

// 276.2 Дан чекбокс, кнопка и абзац. По нажатию на кнопку, если чекбокс отмечен, выведите в абзац слово 'привет', а если чекбокс не отмечен, то слово 'пока'.
// let elem = document.querySelector('#elem');
// let button = document.querySelector('button');
// let p = document.querySelector('p');
// button.addEventListener('click', function(){
//     if (elem.checked == true) {
//         p.innerHTML = p.innerHTML + 'Привет '
//     }
//     else if (elem.checked == false) {
//         p.innerHTML = p.innerHTML + 'Пока '
//     }
// })

// 277.2 Дан чекбокс и кнопка. Сделайте так, чтобы каждый клик по кнопке приводил к смене состояния чекбокса.
// let elem = document.querySelector('#elem');
// let button = document.querySelector('button');
// button.addEventListener('click', function(){
//     elem.checked = !elem.checked
// })

// 278.1 Даны 3 радиокнопки, абзац и кнопка. По клику на кнопку выведите в абзац value отмеченной радиокнопки.
// let radios = document.querySelectorAll('input[type="radio"]');
// let button = document.querySelector('button');
// let p = document.querySelector('p');
// button.addEventListener('click', function() {
//  for (let radio of radios) {
//      if (radio.checked) {
//          p.innerHTML = radio.value
//      }
//  }
// });

// 279.1 Дан инпут и абзац. По изменению инпута выведите его текст в абзац.
// let elem = document.querySelector('#elem');
// let p = document.querySelector('p');
// elem.addEventListener('change', function() {
//     p.innerHTML = this.value
// })

// 279.2 Дан чекбокс. По изменению чебокса выведите на экран его новое состояние.
// let checkbox = document.querySelector('#checkbox');
// let p = document.querySelector('p');
// checkbox.addEventListener('change',function(){
//     p.textContent = checkbox.checked;
// })

// 279.3 Расскажите, в чем разница между событиями blur и change.

// 279.4 Дан инпут. По его изменению проверьте, количество символов в нем меньше 5-ти или нет. Если меньше - покрасьте границу инпута в зеленый цвет, а если больше - в красный.
// let elem = document.querySelector('#elem');
//     elem.addEventListener('input', function() {
//         if(elem.value.length > 5){
//             this.style.background='red'
//         }
//         else if(elem.value.length < 5){
//             this.style.background='green'
//         }
//     });

// 280.1 Дан инпут. Пусть в него вводится текст. Как только длина текста достигнет 5-ти, выведите на экран сообщение об этом.
// let elem = document.querySelector('#elem');
// elem.addEventListener('input', function() {
//     if(elem.value.length >= 5){
//         alert('>= 5 символов');
//     }
// });

// 280.2 Дан инпут. Пусть в него разрешено ввести 5 символов. Дан также абзац. По мере ввода символов в инпут пишите, сколько еще символов можно ввести. Когда количество символов превысит 5-ти, то в абзац выводите то, на сколько символов превышена длина текста.
// let elem = document.querySelector('#elem');
//     let p = document.querySelector('p');
//     elem.addEventListener('input', function() {
//         for(let i = 0; i <= elem.value.length; i++){
//             console.log(i);
//             if(elem.value.length <= 5){
//                 p.textContent = 'Столько символов можно ввести ' + (5 - i);
//             }else{
//                 p.textContent = 'Превышена длина текста' + (5 - i);
//             }
//         }
//     });

// 281.1 Даны два инпута. Сделайте так, чтобы после ввода двух символов фокус ввода переходил ко второму инпуту, а после ввода двух символов в этот инпут - фокус из него убирался.
// let elem1 = document.querySelector('#elem1');
// let elem2 = document.querySelector('#elem2');
// elem1.addEventListener('input', function() {
//   let elem1 = this.value;
//   if (elem1.length == 2) {
//     elem2.focus();
//   }
// });
// elem2.addEventListener('input', function() {
//    let elem1 = this.value;
//   if (elem1.length == 2) {
//    elem2.blur();
//   }
// });

// 282.1 Дан селект, абзац и кнопка. По клику на кнопку выведите текст выбранного пункта списка в абзац.
// let select = document.querySelector('#select');
// let button = document.querySelector('button');
// let p = document.querySelector('p');
// button.addEventListener('click', function() {
//     p.innerHTML = select.value
// })

// 282.2 Сделайте выпадающий список годов от 2020 до 2030. При выборе какого-нибудь пункта списка выведите сообщение о том, високосный этот год или нет.
// let select = document.querySelector('#select');
//     let p = document.querySelector('p');
//     let button = document.querySelector('#button');
//     button.addEventListener('click', function(){
//         if(select.value % 4 == 0){
//             p.textContent = 'Високосный год: ' + select.value;
//         }else{
//             p.textContent = 'Не високосный год: ' + select.value;
//         }
//     });

// 282.3 Сделайте выпадающий список с названиями дней недели. В качестве атрибутов value пунктов списка добавьте номера дней недели от 1 до 7. По изменению списка выведите на экран сообщение о том, выбран выходной день или рабочий.
// let select = document.querySelector('#select');
// let p = document.querySelector('p');
// let button = document.querySelector('#button');
// button.addEventListener('click', function(){
//     if(select.value == 1 || select.value == 2 || select.value == 3 || select.value == 4 || select.value == 5){
//         p.textContent = 'Рабочий день ' + select.value;
//     }else{
//         p.textContent = 'Выходной день ' + select.value;
//     }
// });

// 283.1 Сделайте выпадающий список с названиями месяцев. Сделайте так, чтобы JavaScript по умолчанию выбирал в этом списке текущий месяц.
// let date =new Date();
// let now =date.getMonth()+1;
// let elems = document.querySelectorAll('#select');
// for (let elem of elems){
//     if (elem.value==now){
//         elem.selected=true;
//     }
//     else{
//          elem.selected=false;
//     }       
// }

// 284.1 Дан инпут и селект. В инпут вводится какое-то число. По потери фокуса сделайте выделенным пункт списка, номер которого равен значению из инпута.
// let select = document.querySelector('#select');
//     let inp = document.querySelector('#inp');
//     inp.addEventListener('blur', function(){
//         select.value = inp.value;
//     })

// 284.2 Сделайте выпадающий список с названиями дней недели. Сделайте так, чтобы по JavaScript по умолчанию выбирал в этом списке текущий день.
// let select = document.querySelectorAll('#select > option');
// let nowDay = new Date();
// document.getElementById('select').value = nowDay.getDay();

// 285.1 Переберите все пункты списка циклом и в конец текста каждого пункта добавьте значение его атрибута value.
// let select = document.querySelector('#select');
// for(let elem of select){
//     elem.textContent = elem.textContent + ' ' + elem.value
// }

// 286.1 Переберите пункты списка циклом и для выбранного пункта в конец текста добавьте восклицательный знак, а для невыбранных пунктов - вопросительный.
// let select = document.querySelector('#select');
// select.addEventListener('change',function(){
// for (let option of select) {
//         if (option.selected==true) {
//         option.text.innerHTML=  option.text.innerHTML+ '!'
// }
//       else if (option.selected==false) {
//         option.text.innerHTML=  option.text.innerHTML+ '?'
//         }
//     }
// })

// 286.2 Дан выпадающий список и кнопка. По клику на кнопку сделайте отмеченным последний пункт списка.
// let select = document.querySelector('#select');
// let button = document.querySelector('button');
// let option = select[2];
// button.addEventListener('click', function () {
//     option.selected= true;
//     })



// 286.3 Дан селект и кнопка. По нажатию на кнопку выведите на экран текст отмеченного пункта списка.
// let select = document.querySelector('#select');
// let button = document.querySelector('button');
// button.addEventListener('click', function(){
//  alert(select.value) ;
// })

// 286.4 Дан селект и кнопка. По нажатию на кнопку добавьте в конец текста выбранного пункта восклицательный знак.
// let select = document.querySelector('#select');
// let button = document.querySelector('button');
// button.addEventListener('click', function(){
//     for(let elem of select)
//  elem.textContent = elem.textContent + '!';
// })










/////////////ПОИСК ОШИБОК В КОДЕ/////////////

// 287.1 По потери фокуса текст из textarea должен записаться в див:
// <textarea></textarea>
// <div></div>
// let textarea = document.querySelector('textarea');
// let div = document.querySelector('div');
// textarea.addEventListener('blur', function() {
//  div.textContent = textarea.textContent;
// });
// Решение:
// let textarea = document.querySelector('textarea');
// let div = document.querySelector('div');
// textarea.addEventListener('blur', function() {
//  div.innerHTML = textarea.value;
// });

// 287.2 По клику на кнопку в див должно записаться или одно, или другое значение:
// <input type="checkbox">
// <div></div>
// <button>button</button>
// let checkbox = document.querySelectorAll('#checkbox');
// let button = document.querySelectorAll('#button');
// let div = document.querySelectorAll('#div');
// btn.addEventListener('click', function() {
//  if (checkbox.checked) {
//      div.value = '111';
//  } else {
//      div.value = '222';
//  }
// });
// Решение:
// let elem = document.querySelector('#elem');
// let button = document.querySelector('button');
// let div = document.querySelector('div');
// button.addEventListener('click', function() {
//  if (elem.checked) {
//      div.innerHTML = '111';
//  } else {
//      div.innerHTML = '222';
//  }
// });

// 287.3 По клику на кнопку, если чекбокс отмечен, то должно вывестись одно значение, а если не отмечен - другое:
// <input type="checkbox">
// <button>button</button>
// let checkbox = document.querySelector('[type="checkbox"]');
// let button = document.querySelector('button');
// button.addEventListener('click', function() {
//  if (checkbox.checked = true) {
//      console.log('+++');
//  } else {
//      console.log('---');
//  }
// });
// Решение:
// let checkbox = document.querySelector('input[type="checkbox"]');
// let button = document.querySelector('button');
// button.addEventListener('click', function() {
//  if (checkbox.checked) {
//      console.log('+++');
//  } else {
//      console.log('---');
//  }
// });










/////////////ОБЪЕКТ Event/////////////
// 288.1 Самостоятельно проделайте описанные манипуляции и выведите объект с событием в консоль. Изучите структуру этого объекта.
// let elem = document.querySelector('#elem');
// elem.addEventListener('click', function(event) {
//  console.log(event);
// });

// 289.1 Сделайте так, чтобы при движении мышки по странице, отображались координаты курсора, подобно тому, как это сделано в следующем образце:
// let elem = document.getElementById('elem');
// document.addEventListener('mousemove', function(event) {
//  elem.innerHTML = event.pageX + ' : ' + event.pageY;
// });

// 290.1 В следующем коде в двум событиям привязан один и тот же обработчик:
// let elem = document.querySelector('#elem');
// elem.addEventListener('click', func);
// elem.addEventListener('dblclick', func);
// function func(event) {
//     if (event.type == "click") {
//         elem.style.backgroundColor = "green";
//     }
//     else if(event.type == "dblclick") {
//         elem.style.backgroundColor = "red";
//     }
//   }

// 291.1
// let elem = document.getElementById('elem');
// elem.addEventListener('click', function(event) { 
//   if (event.target.tagName === 'UL') {
//     let li = document.createElement('li');
//     li.innerHTML = 'text';
//     elem.appendChild(li);
//   }
//   if (event.target.tagName === 'LI') {
//     event.target.textContent += '!';
//   }
// })

// 292.1,2 Сделайте инпут, который будет по вводу выводить значения введенных клавиш и их коды. Сделайте инпут, который будет по вводу выводить значения введенных клавиш и их коды.
// let elem = document.querySelector('input');
// elem.addEventListener('keypress', function(event) {
// 	elem.addEventListener('keypress', function(event) {
//         console.log(event.key, event.code);
//     });
// });

// 292.3 Определите, какой код будет у клавиши Enter.
// Ответ: Enter 13

// 292.4 Определите, какой код будет у клавиши BackSpace.
// Ответ: Backspace 8

// 292.5 Дан абзац и инпут. В него вводится текст и нажимается клавиша Enter. Сделайте так, чтобы в этот момент введенный текст попадал в абзац под инпутом, а содержимое инпута очищалось.
// let elem = document.querySelector('#elem');
//     let p = document.querySelector('p');
//     elem.addEventListener('keypress', func);
//     function func(event) {
//         if(event.keyCode === 13) {
//             p.innerHTML = elem.value;
//             elem.value = '';
//         }
//     };

// 293.1 Дан элемент. Сделайте так, чтобы по клику на него он красился в красный цвет, но только если в момент клика нажата клавиша Alt.
// let button = document.querySelector('button');
// button.addEventListener('click', function(event) {
//         if (event.altKey) {
//             button.style.backgroundColor = "red";
//         }
// 	}
// );

// 293.2 Сделайте так, чтобы по клику на любую li, в конец ее текста добавлялось число 1, если нажата клавиша Ctrl, и число 2, если нажата клавиша Shift.
// let elem = document.getElementById('elem');
// elem.addEventListener('click', function(event) { 
//   if (event.ctrlKey) {
//     event.target.textContent += '1';
//   }
//   if (event.shiftKey) {
//     event.target.textContent += '2';
//   }
// })

// 294.1 Даны ссылки. Сделайте так, чтобы по клику на ссылку ей в конец записывался ее href, а перехода по ссылке не происходило.
// let elem = document.querySelector('#elem');
// let elem1 = document.querySelector('#elem1');
// elem.addEventListener('click', function(event) {
//     elem.textContent = elem.textContent + ' ' + elem.href
// 	event.preventDefault();
// });
// elem1.addEventListener('click', function(event) {
//     elem1.textContent = elem1.textContent + ' ' + elem1.href
// 	event.preventDefault();
// });

// 294.2 Даны два инпута, абзац и ссылка. Пусть в инпуты вводятся числа. Сделайте так, чтобы по клику на ссылку в абзац записалась сумма введенных чисел.
// let inp = document.querySelector('#inp');
// let inp1 = document.querySelector('#inp1');
// let url = document.querySelector('#url');
// let p = document.querySelector('p');
// url.addEventListener('click', function(event){
//     event.preventDefault();
//     p.textContent = + inp.value + + inp1.value;
// })

// 295.1 Самостоятельно напишите код, который будет демонстрировать всплытие событий. Проверьте на нем всплытие различных типов событий.
// let elem1 = document.querySelector('#elem1');
// let elem2 = document.querySelector('#elem2');
// let elem3 = document.querySelector('#elem3');
// elem1.addEventListener('click', function() {
// 	console.log('зеленый');
// });
// elem2.addEventListener('click', function() {
// 	console.log('голубой');
// });
// elem3.addEventListener('click', function() {
// 	console.log('красный');
// });

// 296.1 Навешайте на див обработчик клика. В этом обработчике определите, в каком из тегов сработало событие.
// let div = document.querySelector('#div');
// let ul = document.querySelector('#ul');
// let li = document.querySelectorAll('#li');
// div.addEventListener('click', function(event){
//     if(event.target.matches('div')){
//         console.log('Клик именно по диву');
//     }
//     if(event.target.matches('ul')){
//         console.log('Клик именно по списку');
//     }
//     if(event.target.matches('li')){
//         event.target.textContent = event.target.textContent + '!';
//         console.log('Клик именно по элементу списка');
//     }
// });

// 296.2 Модифицируйте предыдущую задачу. Сделайте так, чтобы при клике на li, ей в конец добавлялся восклицательный знак, а при клике на ul - ей в конец добавлялась новая li.
// let div = document.querySelector('#div');
// let ul = document.querySelector('#ul');
// let li = document.querySelectorAll('#li');
// div.addEventListener('click', function(event){
//     if(event.target.matches('div')){
//         console.log('Клик именно по диву');
//     }
//     if(event.target.matches('ul')){
//         console.log('Клик именно по списку');
//         let li = document.createElement('li');
//         li.setAttribute('id', 'li');
//         li.innerHTML = '...';
//         ul.appendChild(li);
//     }
//     if(event.target.matches('li')){
//         event.target.textContent = event.target.textContent + '!';
//         console.log('Клик именно по элементу списка');
//     }
// });

// 297.1 Самостоятельно реализуйте корректную работу описанной задачи.
// let parent = document.querySelector('#parent');
// let button = document.querySelector('button');
// let block  = document.querySelector('#block');
// button.addEventListener('click', function() {
// 	block.classList.add('active');
// });
// parent.addEventListener('click', function() {
// 	block.classList.remove('active');
// });

// 300.1 Повторите приведенное решение. Убедитесь, что новые li также будут реагировать на клик.
// let ul = document.querySelector('ul')
// let li = document.querySelectorAll('li')
// ul.addEventListener('click', function(event) {
// event.target.innerHTML = event.target.innerHTML + '!';
//     console.log(this);         // наш список
// 	console.log(event.target); // пункт списка
// });

// 300.2 Повторите приведенное решение.
// let ul = document.querySelector('ul')
// let li = document.querySelectorAll('li')
// ul.addEventListener('click', function(event) {
// 	let li = event.target.closest('li');
// 	if (li) {
// 		li.innerHTML = li.innerHTML + '!';
// 	}
// });