import React from 'react';
import { Search } from 'lucide-react';
import profile from '../assets/profile.jpg';

function Header() {
  return (
    <header className="px-4 py-2 h-15 flex justify-between items-center">
      <a href="#">
        <h1 className="text-lg font-bold">Story Canvas</h1>
      </a>

      <div className="flex items-center">
        {/* 모바일 서치 */}
        <button className="p-1 mr-2 rounded-full cursor-pointer">
          <Search size={24} />
        </button>

        {/* 탭+  */}
        {/* <div>
          <Search />
          <input type="text" />
        </div> */}

        {/* 게스트 */}
        {/* <a href="#" className="block px-1 py-1 rounded font-bold">
          로그인
        </a> */}

        {/* 유저 프로필 */}
        <a
          href="#"
          className="w-8 h-8 rounded-full overflow-hidden flex justify-center items-center border border-gray-300 bg-gray-100 overflow-hidden"
        >
          <img
            src={profile}
            alt="user's profile"
            className="w-full h-full object-cover"
          />
        </a>
      </div>
    </header>
  );
}

export default Header;
