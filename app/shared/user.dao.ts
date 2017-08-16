import { knownFolders, File, Folder, path } from 'tns-core-modules/file-system'

export interface UserDAO {
  read()
  write(data: string)
}

export class UserDAO implements UserDAO {
    fileName: string = 'user.json';
    documents: Folder = knownFolders.documents();
    file: File = this.documents.getFile(this.fileName); 

    read(): Promise<any>{    
        return this.file.readText();
    }

    write(data): Promise<any>{
        return this.file.writeText(data);
    }
}