import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './redux/rootReducer';
// Cấu hình cho redux-persist
const persistConfig = {
    key: 'root', // key lưu trữ trong localStorage
    storage, // Sử dụng storage
    // Thêm whitelist hoặc blacklist nếu cần
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Cấu hình Redux store
const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                // Tắt kiểm tra tuần tự hóa cho một số trường hợp
                ignoredActions: ['persist/PERSIST'],
                ignoredPaths: ['register'], // Lloại bỏ một số giá trị không tuần tự hóa
            },
        }),
});

// Khởi tạo persistor
export const persistor = persistStore(store);
export default store;
