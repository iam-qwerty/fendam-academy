export declare class UploadsService {
    private readonly allowedTypes;
    generatePresignedUrl(filename: string, contentType: string): {
        signedUrl: string;
        fileKey: string;
    };
    canonicalUrl(fileKey: string): string;
}
