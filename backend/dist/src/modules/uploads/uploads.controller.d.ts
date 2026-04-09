import { UploadsService } from './uploads.service.js';
import { PresignedUrlDto } from './dto/upload.dto.js';
export declare class UploadsController {
    private uploadsService;
    constructor(uploadsService: UploadsService);
    getPresignedUrl(dto: PresignedUrlDto): {
        signedUrl: string;
        fileKey: string;
    };
}
