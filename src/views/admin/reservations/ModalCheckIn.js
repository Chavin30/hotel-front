// import React,{useState,useEffect} from 'react'
// // import Input from '@material-ui/core/Input'
// import MenuItem from '@material-ui/core/MenuItem'
// import Box from '@material-ui/core/Box'
// import Typography from '@material-ui/core/Typography'
// import Modal from '@material-ui/core/Modal'
// import TextField from '@material-ui/core/TextField'
// import Grid from '@material-ui/core/Grid'
// import TextareaAutosize from '@material-ui/core/TextareaAutosize';

// //Icons
// import Fab from '@material-ui/core/Fab'
// import CancelIcon from '@material-ui/icons/Cancel'
// import SaveIcon from '@material-ui/icons/Save'

// //validate
// import validationsForm from "./validationSchema"
// import { useFormik } from "formik"
// import * as yup from "yup"


// const ModalCheckIn = ({ handleClose,open, setLoader ,rooms,handleForm,saveData,initialForm}) => {
//     const style = {
//         position: 'absolute',
//         top: '50%',
//         left: '50%',
//         transform: 'translate(-50%, -50%)',
//         width: 600,
//         bgcolor: 'background.paper',
//         border: '2px solid #cecece',
//         borderRadius: 10,
//         boxShadow: '10px 5px 5px',
//         p: 4,
//     }

//     const validationSchema = yup.object(validationsForm)

//     const formik = useFormik({
//         initialValues : initialForm,
//         enableReinitialize:true,
//         onSubmit: (values,{resetForm}) =>{
//             saveData(values)
//             resetForm()
//         },
//         validationSchema: validationSchema
//     })

//     return (
        
//         <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//         >
//         <Box sx={style}>
//             <Typography id="modal-modal-title" variant="h6" component="h2">
//                 Check In: Select rooms
//             </Typography>
            
//             <form>
                
//                 <input type="checkbox" />
//                 <Grid>
//                     <Fab onClick={formik.handleSubmit} color="primary" aria-label="add" size="small" style={{float:'right',marginTop:'20px',marginRight:'10px'}}>
//                         <SaveIcon />
//                     </Fab>
//                     <Fab onClick={handleClose} color="secondary" aria-label="add" size="small" style={{float:'right',marginTop:'20px',marginRight:'10px'}}>
//                         <CancelIcon />
//                     </Fab>
//                 </Grid>
//             </form>

//         </Box>
//         </Modal>
//     )
// }

// export default ModalCheckIn