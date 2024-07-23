// 申し訳程度の解説

// もし、HTMLの読み込みが完了したら、以下の処理を実行する
window.onload = () => {
    // HTMLのidがadd-todoの要素を取得
    // つまり「追加」ボタンを取得
    const addTodoButton = document.getElementById('add-todo');

    // 「追加」ボタンに何らかのアクション（クリックとか）があった場合、以下の処理を実行する
    addTodoButton.addEventListener('click', () => {
        // todoInput つまり、テキストボックスの要素を取得
        const todoInput = document.getElementById('input-todo');
        // todoList つまり、TODOリストの要素を取得。
        // ここに新しいTODOを追加する
        const todoList = document.getElementById('todos');
        // todoText つまり、テキストボックスに入力された文字列を取得
        const todoText = todoInput.value;
    
        // もしも入力された文字列が空文字だった場合、アラートを表示して処理を終了する
        if( typeof todoText !== 'string' || todoText === '' ){
            alert('文字列を入力してください！');
            todoInput.value = '';
            return;
        }
    
        // 新しい要素「div」を作成
        const todoItem = document.createElement('div');
        // 作成した要素にクラス名「todo」を追加
        // todoクラスはCSSでスタイリングされている
        todoItem.classList.add('todo');
    
        // h1要素（タイトル）、ボタンを作成する。
        const title = document.createElement('h1')
        const button = document.createElement('button');
    
        // タイトルを入力された内容のものにする
        title.textContent = todoText;
        // タイトルもボタンもスタイリングするためのクラスを追加
        title.classList.add('todo-title');

        button.classList.add('todo-btn');
        button.classList.add('end');
        button.textContent = '完了';
    
        // 完了ボタンにクリックイベントを追加
        button.addEventListener('click', () => {
            // 完了ボタンが押されたら、todoItemをtodoListから削除する
            // つまり、自分自身を消すようにする。
            todoList.removeChild( todoItem );
        })
    
        // 作成したこれらの要素を、todoItemに追加する
        todoItem.appendChild(title);
        todoItem.appendChild(button);
        // 作成したtodoItemをtodoListに追加する
        todoList.appendChild(todoItem);
    
        // テキストボックスを空にする
        todoInput.value = '';
    })
}