import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'players',
  initialState: {
    players: [],
    errors: null,
    loading: false
  },
  setPlayers: (state, action) => {
    state.players = action.payload.players
  }
})

function getAllPlayers() {
}
