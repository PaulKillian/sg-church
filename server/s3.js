var aws = require('aws-sdk');
require('dotenv').config();

aws.config.update({
region: 'us-west-2',
accessKeyId: process.env.S3ID,
secretAccessKey: process.env.S3KEY
})

const S3_BUCKET = process.env.S3BUCKET

exports.sign_s3 = (req,res) => {
	const s3 = new aws.S3();  // Create a new instance of S3
	const fileName = req.body.fileName;
	const fileType = req.body.fileType;

	const s3Params = {
		Bucket: S3_BUCKET,
		Key: fileName,
		Expires: 3000,
		ContentType: fileType,
		ACL: 'public-read'
	};

	s3.getSignedUrl('putObject', s3Params, (err, data) => {
	if(err){
	console.log(err);
	res.json({error: err})
	}

	const returnData = {
		signedRequest: data,
		url: `https://${S3_BUCKET}.s3.amazonaws.com/${fileName}`};
		res.json({data:{returnData}});
	});
}
