import { knownFolders, File, Folder, path } from 'tns-core-modules/file-system'

export interface StateDao {
  read()
  write(data: string)
}

export class StateFS implements StateDao {

    fileName: string = 'state.json';
    documents: Folder = knownFolders.documents();
    file: File = this.documents.getFile(this.fileName);  

    read(): Promise<any>{    
        return this.file.readText()
    }

    write(data): Promise<any>{
        return this.file.writeText(data)
    }

}