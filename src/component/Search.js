import React, { useState } from 'react';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
    // Gọi hàm để lấy gợi ý từ API hoặc từ một nguồn dữ liệu khác
    // Ví dụ: getSuggestionsFromAPI(searchTerm);
    // Sau khi nhận được gợi ý, cập nhật giá trị của suggestions
    // setSuggestions(suggestions);
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion);
    setSuggestions([]);
    // Thực hiện hành động khi người dùng chọn một gợi ý, ví dụ: tìm kiếm
    // search(suggestion);
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Nhập từ khóa tìm kiếm..."
      />
      <ul>
        {suggestions.map((suggestion, index) => (
          <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
            {suggestion}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;