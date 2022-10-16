import { Search } from "@mui/icons-material";
import { IconButton, Paper, Typography } from "@mui/material"

const SearchBar = () => {
    const searchValue = '';
  return (
      <Paper
          component="form"
          sx={{
              borderRadius: 20,
              border: '1px solid gray',
              paddingX: 2
          }}>
          <input placeholder="Search.."
              value={searchValue}
              sx={{ width: '350px', height: 'inherit' }}
          />
          <IconButton>
            <Search />
          </IconButton>
      </Paper>
  )
}

export default SearchBar