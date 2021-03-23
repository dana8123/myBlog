import mongoose from 'mongoose';

const connect = () => {

mongoose.connect('mongodb://localhost/myBlog', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true,
  useCreateIndex: true
}, (error) => {
  if(error){console.log('몽고디비 연결에러',(error));
} else{
  console.log('몽고디비 연결 성공!');
  }
}
);
};

connect();

mongoose.connection.on('error',(error)=>{
  console.error('몽고디비 연결 에러',error);
});
mongoose.connection.on('disconnected()', ()=>{
  console.error('몽고디비 연결이 끊겼습니다. 연결을 재시도합니다.');
  connect();
});

