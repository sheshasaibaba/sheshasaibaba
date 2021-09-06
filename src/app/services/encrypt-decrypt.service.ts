import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class EncryptDecryptService {
  encryptSecretKey = "123456789"
  constructor() { }
    //The set method is use for encrypt the value.
  // set(keys: string, value: { toString: () => string; }){
  //   var key = CryptoJS.enc.Utf8.parse(keys);
  //   var iv = CryptoJS.enc.Utf8.parse(keys);
  //   var encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(value.toString()), key,
  //   {
  //       keySize: 128 / 8,
  //       iv: iv,
  //       mode: CryptoJS.mode.CBC,
  //       padding: CryptoJS.pad.Pkcs7
  //   });

  //   return encrypted.toString();
  // }
  set(data: any){
      return CryptoJS.AES.encrypt(JSON.stringify(data), this.encryptSecretKey).toString();
  }
  get(data: any){
      const bytes = CryptoJS.AES.decrypt(data, this.encryptSecretKey);
      if (bytes.toString()) {
        return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
      }
      return data;
  }


  //The get method is use for decrypt the value.
  // get(keys: string, value: string | CryptoJS.lib.CipherParams){
  //   console.log(keys, value)
  //   var key = CryptoJS.enc.Utf8.parse(keys);
  //   var iv = CryptoJS.enc.Utf8.parse(keys);
  //   var decrypted = CryptoJS.AES.decrypt(value, key, {
  //       keySize: 128 / 8,
  //       iv: iv,
  //       mode: CryptoJS.mode.CBC,
  //       padding: CryptoJS.pad.Pkcs7
  //   });
  //   console.log(decrypted.toString(CryptoJS.enc.Utf8))

  //   return decrypted.toString(CryptoJS.enc.Utf8);
  // }
}
