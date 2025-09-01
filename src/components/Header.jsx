import React from 'react';
import { Search } from 'lucide-react';

function Header() {
  return (
    <header>
      <a href="#">
        <h1>Story Canvas</h1>
      </a>

      <div>
        {/* 모바일 서치 */}
        <button>
          <Search />
        </button>

        {/* 탭+  */}
        {/* <div>
          <Search />
          <input type="text" />
        </div> */}

        {/* 게스트 */}
        <a href="">로그인</a>

        {/* 유저 프로필 */}
        <a href="">
          <img src="" alt="" />
        </a>
      </div>
    </header>
  );
}

export default Header;
