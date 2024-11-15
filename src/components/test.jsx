import React, { useState, useEffect } from 'react';

function ExampleComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Hàm này sẽ chạy sau mỗi lần render
    console.log(`Bạn đã bấm ${count} lần`);

    // Có thể return một hàm cleanup để dọn dẹp sau khi component unmount
    return () => {
      console.log('Dọn dẹp sau khi component bị xóa');
    };
  });

  return (
    <div>
      <p>Bạn đã bấm {count} lần</p>
      <button onClick={() => setCount(count + 1)}>Bấm vào tôi</button>
    </div>
  );
}

export default ExampleComponent;