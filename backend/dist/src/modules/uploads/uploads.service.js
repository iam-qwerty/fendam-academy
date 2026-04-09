var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable, BadRequestException } from '@nestjs/common';
import { randomUUID } from 'crypto';
let UploadsService = class UploadsService {
    allowedTypes = [
        'application/pdf',
        'image/jpeg',
        'image/png',
        'application/zip',
    ];
    generatePresignedUrl(filename, contentType) {
        if (!this.allowedTypes.includes(contentType))
            throw new BadRequestException(`File type not allowed. Allowed: ${this.allowedTypes.join(', ')}`);
        const fileKey = `uploads/${randomUUID()}-${filename}`;
        const signedUrl = `https://${process.env.R2_PUBLIC_DOMAIN || 'r2-stub.example.com'}/${fileKey}?stub=true`;
        return { signedUrl, fileKey };
    }
    canonicalUrl(fileKey) {
        return `https://${process.env.R2_PUBLIC_DOMAIN || 'r2-stub.example.com'}/${fileKey}`;
    }
};
UploadsService = __decorate([
    Injectable()
], UploadsService);
export { UploadsService };
//# sourceMappingURL=uploads.service.js.map