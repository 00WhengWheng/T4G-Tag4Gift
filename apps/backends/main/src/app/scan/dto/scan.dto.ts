// Input DTO for scan request
export interface CreateScanDto {
	userId: string;
	tagId: string;
	ipAddress?: string;
	userAgent?: string;
}

// Output DTO for scan response
export interface ScanResponseDto {
	scanId: string;
	userId: string;
	tagId: string;
	coinId: string;
	coinAmount: number;
	scannedAt: Date;
	expiredAt: Date;
	message?: string;
}
