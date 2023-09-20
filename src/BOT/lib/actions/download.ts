import util from 'util';
import stream from 'stream';
import axios from 'axios';
import * as fs from 'node:fs';

const pipeline = util.promisify(stream.pipeline);

const downloadFile = async () => {
  try {
    const request = await axios.get('https://drive.google.com/uc?id=1UrE0_Z2Ov0wsdzl6EYA8sgGni3PJOVCf', {
      responseType: 'stream',
    });
    await pipeline(request.data, fs.createWriteStream('./src/assets/temp/test.mp3'));
  } catch (error) {
    console.error('download failed', error);
  }
}

downloadFile()