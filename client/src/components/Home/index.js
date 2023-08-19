import {Box, IconButton} from '@mui/material';
import {TextField} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

function SearchBar() {
  return (
    <div style={{display: 'flex', alignItems: 'center',
      justifyContent: 'center'}}
    >
      <Box sx={{
        display: 'flex', justifyContent: 'center',
        width: '90%', maxWidth: 460, alignSelf: 'center',
        boxShadow: 4, borderRadius: 2, padding: 1,
        marginTop: 2, marginBottom: 4}}
      >
        <TextField id="outlined-basic" label="Search CourseWiki"
          variant="outlined" size='small' sx={{width: '100%'}}/>
        <IconButton color='#000' aria-label='search'
          sx={{marginRight: -1}}
        >
          <SearchIcon />
        </IconButton>
      </Box>
    </div>
  );
}

export default function Home() {
  return (
    <div style={{display: 'block', margin: -24,
      backgroundColor: '#171717', minHeight: '100vh'}}
    >
      <div style={{display: 'grid', alignItems: 'center',
        backgroundColor: 'white'}}
      >
        <h1 style={{
          textAlign: 'center', fontSize: 'clamp(2.5rem, 10vw, 6rem)',
          fontWeight: 'normal', marginTop: 20, marginBottom: 0}}
        >
          Course Wiki
        </h1>
        <h2 style={{textAlign: 'center', fontSize: 'clamp(1rem, 3vw, 1.5rem)',
          fontWeight: 'normal'}}
        >
          Knowledge is the cheapest and most rewarding investment
        </h2>
        <SearchBar style={{display: 'block'}} />
        <div className='home-image' style={{
          display: 'flex',
          justifyContent: 'center', width: '100%', position: 'relative'}}
        >
          <img src='https://i.imgur.com/kZznhsj.png' alt='home'
            style={{
              height: 'auto', width: '95%', alignSelf: 'center',
              maxWidth: 1060, objectFit: 'contain', zIndex: 1,
            }}/>
          <div style={{
            content: '""',
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '50%', // Half of the container
            backgroundColor: '#171717',
          }}></div>
        </div>
      </div>
    </div>
  );
}
