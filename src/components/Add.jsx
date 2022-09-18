import { Tooltip, Fab, Modal, Box, Typography, Avatar, TextField, Stack, ButtonGroup, Button } from "@mui/material";
import React, { useState } from 'react'
import {Add as AddIcon, DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack} from "@mui/icons-material"
import styled from "@emotion/styled";


const StyledModal = styled(Modal)({
  display:'flex',
  alignItems:'center',
  justifyContent:'center'
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: '10px',
  marginBottom: '20px'
});


export const Add = () => {
  const [modal, setModal] = useState(false);

  const openModal = (e)=>{
    setModal(true);
  }
  const closeModal = (e) => {
    setModal(false);
  };
  return (
    <>
      <Tooltip
        title="Add Post"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", md: 30 },
        }}
      >
        <Fab onClick={openModal} color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>

      <StyledModal
        open={modal}
        onClose={closeModal}
        aria-labelledby="modal-modal-title"
      >
        <Box
          width={400}
          bgcolor={"background.default"}
          color={"text.primary"}
          p={3}
          borderRadius={5}
        >
          <Typography
            color="gray"
            textAlign="center"
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            Create Post
          </Typography>
          <UserBox>
            <Avatar
              sx={{ width: "30px", height: "30px" }}
              alt="Remy Sharp"
              src="https://media.istockphoto.com/photos/portrait-of-handsome-smiling-young-man-with-crossed-arms-picture-id1200677760?k=20&m=1200677760&s=612x612&w=0&h=JCqytPoHb6bQqU9bq6gsWT2EX1G5chlW5aNK81Kh4Lg="
              id="user-button"
            />
            <Typography variant="span" fontWeight={500}>
              John Doe
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%" }}
            multiline
            rows={3}
            placeholder="What's on your mind..."
            variant="standard"
          />
          <Stack direction="row" gap={1} mt={1} mb={3}>
            <EmojiEmotions color="primary" />
            <Image color="secondary" />
            <VideoCameraBack color="success" />
            <PersonAdd color="error" />
          </Stack>

          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button>Post</Button>
            <Button sx={{ width: "100px" }}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
}
