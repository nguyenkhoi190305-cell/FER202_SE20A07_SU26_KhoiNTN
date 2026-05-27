//Tạo hello.jsx dùng để hiện thị hello,React trong thẻ p, react in đậm
import React from 'react';

function Hello() {
  return (
    <div>
      <p>Hello, <span style={{ color: 'blue', fontWeight: 'bold' }}>
        React</span>!</p>
    </div>
  );
}

export default Hello;