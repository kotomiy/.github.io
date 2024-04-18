// プログラミングスキルのデータ
const programmingData = [
    { name: 'Python', value: 70 },
    { name: 'Java', value: 65 },
    { name: 'HTML', value: 60 },
    { name: 'CSS', value: 60 }
];

const msData = [
    { name: 'Word', value: 95 },
    { name: 'Power Point', value: 85 },
    { name: 'Excel', value: 75 }
];

// 言語スキルのデータ
const languagesData = [
    { name: 'Japanese', value: 100 },
    { name: 'Chinese', value: 65 },
    { name: 'English', value: 67 }
];

// プログラミングスキルのチャート描画
drawChart(programmingData, 'programming');

// MS関連スキルのチャート描画
drawChart(msData, 'microsoft');

// 言語スキルのチャート描画
drawChart(languagesData, 'languages');

function drawChart(skillData, containerId) {
    const container = document.querySelector(`#${containerId}`); // セレクタの修正

    for (const skill of skillData) {
        const canvas = document.createElement('canvas');
        canvas.width = 300;
        canvas.height = 50;
        container.appendChild(canvas);

        const ctx = canvas.getContext('2d');
        const barWidth = (skill.value / 100) * (canvas.width - 50); // グラフの幅を広げる
        const barHeight = canvas.height - 20;

        // グラフの角を丸く描画するカスタム関数
        function roundRect(ctx, x, y, width, height, radius) {
            ctx.beginPath();
            ctx.moveTo(x + radius, y);
            ctx.lineTo(x + width - radius, y);
            ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
            ctx.lineTo(x + width, y + height - radius);
            ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
            ctx.lineTo(x + radius, y + height);
            ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
            ctx.lineTo(x, y + radius);
            ctx.quadraticCurveTo(x, y, x + radius, y);
            ctx.closePath();
        }

        // グラフの背景をライトグレーで描画
        ctx.fillStyle = 'lightgrey';
        roundRect(ctx, 50, 10, canvas.width - 50, barHeight, 10);
        ctx.fill();

        // 実際の値を#e5d9f2で描画
        ctx.fillStyle = '#e5d9f2';
        roundRect(ctx, 50, 10, barWidth, barHeight, 10);
        ctx.fill();

        // 数値と名前を表示
        ctx.font = '14px Arial';
        ctx.fillStyle = '#fff'; // 数値の色を白に変更
        // グラフ内に数値を表示、グラフの中央に表示する
        const textWidth = ctx.measureText(`${skill.name} ${skill.value}%`).width;
        const textX = (canvas.width - textWidth) / 2;
        const textY = (barHeight + 20) / 2 + 5; // 少し下に表示
        ctx.fillText(`${skill.name} ${skill.value}%`, textX, textY);
    }
}
