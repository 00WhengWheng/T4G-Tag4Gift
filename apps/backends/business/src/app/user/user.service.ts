import { Injectable, HttpService } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor(private readonly httpService: HttpService) {}

  async getUserById(id: string) {
    // Fetch user data from main backend
    const response = await this.httpService.get(`${process.env.MAIN_API_URL}/users/${id}`).toPromise();
    return response.data;
  }

  async getUserByEmail(email: string) {
    const response = await this.httpService.get(`${process.env.MAIN_API_URL}/users/email/${email}`).toPromise();
    return response.data;
  }

  async listUsers(limit = 20, offset = 0) {
    const response = await this.httpService.get(`${process.env.MAIN_API_URL}/users?limit=${limit}&offset=${offset}`).toPromise();
    return response.data;
  }
}
