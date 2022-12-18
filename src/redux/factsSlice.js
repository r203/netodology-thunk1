import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  factsStarWars: [
    'прообразом Чубакки стал пёс режиссёра',
    'актёрам разрешили подобрать любимый цвет для своих световых мечей',
    'в фильме «Звёздные войны - V: Империя наносит ответный удар» среди космических объектов можно заметить парящий ботинок и картофелину',
    'дыхание Дарта Вейдера — это звуки дыхательной маски, подключённой к аквалангу',
    'планета Татуин названа в честь реального города в Тунисе — стране, где происходила часть съёмок',
  ],
  value: 1,
};

export const factsSlice = createSlice({
  name: 'facts',
  initialState,
  reducers: {
    changeCountFact(state, action) {
      state.value = action.payload;
    }
  },

});

export const { changeCountFact } = factsSlice.actions;


export default factsSlice.reducer;
